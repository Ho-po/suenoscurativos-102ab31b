import { pipeline, env, RawImage } from '@huggingface/transformers';

// Configure transformers.js to always download models
env.allowLocalModels = false;
env.useBrowserCache = true;

const MAX_IMAGE_DIMENSION = 1024;

function resizeImageIfNeeded(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D, image: HTMLImageElement) {
  let width = image.naturalWidth;
  let height = image.naturalHeight;

  if (width > MAX_IMAGE_DIMENSION || height > MAX_IMAGE_DIMENSION) {
    if (width > height) {
      height = Math.round((height * MAX_IMAGE_DIMENSION) / width);
      width = MAX_IMAGE_DIMENSION;
    } else {
      width = Math.round((width * MAX_IMAGE_DIMENSION) / height);
      height = MAX_IMAGE_DIMENSION;
    }

    canvas.width = width;
    canvas.height = height;
    ctx.drawImage(image, 0, 0, width, height);
    return true;
  }

  canvas.width = width;
  canvas.height = height;
  ctx.drawImage(image, 0, 0);
  return false;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
let segmenterInstance: any = null;

export const getSegmenter = async (onProgress?: (progress: number) => void) => {
  if (segmenterInstance) return segmenterInstance;
  
  onProgress?.(0);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  segmenterInstance = await (pipeline as any)('image-segmentation', 'Xenova/segformer-b0-finetuned-ade-512-512', {
    device: 'webgpu',
  });
  onProgress?.(100);
  
  return segmenterInstance;
};

export const removeBackground = async (
  imageElement: HTMLImageElement,
  onProgress?: (progress: number) => void
): Promise<Blob> => {
  try {
    console.log('Starting background removal process...');
    const segmenter = await getSegmenter(onProgress);
    
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    
    if (!ctx) throw new Error('Could not get canvas context');
    
    const wasResized = resizeImageIfNeeded(canvas, ctx, imageElement);
    console.log(`Image ${wasResized ? 'was' : 'was not'} resized. Final dimensions: ${canvas.width}x${canvas.height}`);
    
    // Get image as RawImage for the pipeline
    const imageData = canvas.toDataURL('image/jpeg', 0.8);
    const rawImage = await RawImage.fromURL(imageData);
    console.log('Image loaded for processing');
    
    console.log('Processing with segmentation model...');
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const result = await segmenter(rawImage) as any[];
    
    console.log('Segmentation result:', result);
    
    if (!result || !Array.isArray(result) || result.length === 0 || !result[0].mask) {
      throw new Error('Invalid segmentation result');
    }
    
    const outputCanvas = document.createElement('canvas');
    outputCanvas.width = canvas.width;
    outputCanvas.height = canvas.height;
    const outputCtx = outputCanvas.getContext('2d');
    
    if (!outputCtx) throw new Error('Could not get output canvas context');
    
    outputCtx.drawImage(canvas, 0, 0);
    
    const outputImageData = outputCtx.getImageData(0, 0, outputCanvas.width, outputCanvas.height);
    const data = outputImageData.data;
    
    const maskData = result[0].mask.data as number[];
    for (let i = 0; i < maskData.length; i++) {
      const alpha = Math.round((1 - maskData[i]) * 255);
      data[i * 4 + 3] = alpha;
    }
    
    outputCtx.putImageData(outputImageData, 0, 0);
    console.log('Mask applied successfully');
    
    return new Promise((resolve, reject) => {
      outputCanvas.toBlob(
        (blob) => {
          if (blob) {
            console.log('Successfully created final blob');
            resolve(blob);
          } else {
            reject(new Error('Failed to create blob'));
          }
        },
        'image/png',
        1.0
      );
    });
  } catch (error) {
    console.error('Error removing background:', error);
    throw error;
  }
};

export const loadImage = (src: string): Promise<HTMLImageElement> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  });
};
