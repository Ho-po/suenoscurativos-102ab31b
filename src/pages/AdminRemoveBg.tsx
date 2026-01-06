import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Download, Loader2, CheckCircle, XCircle, Play } from 'lucide-react';
import { removeBackground, loadImage, getSegmenter } from '@/lib/removeBackground';

// Import bonus images
import bonusArcangeles from '@/assets/bonus/bonus-arcangeles.png';
import bonusColorear from '@/assets/bonus/bonus-colorear.png';
import bonusDecodificador from '@/assets/bonus/bonus-decodificador.png';
import bonusDiario from '@/assets/bonus/bonus-diario.png';
import bonusHogar from '@/assets/bonus/bonus-hogar.png';
import bonusLinaje from '@/assets/bonus/bonus-linaje.png';
import bonusMeditaciones from '@/assets/bonus/bonus-meditaciones.png';
import bonusOraculos from '@/assets/bonus/bonus-oraculos.png';

interface BonusImage {
  id: string;
  name: string;
  src: string;
  status: 'pending' | 'processing' | 'done' | 'error';
  processedBlob?: Blob;
  processedUrl?: string;
  error?: string;
}

const initialImages: BonusImage[] = [
  { id: 'arcangeles', name: 'Arcángeles', src: bonusArcangeles, status: 'pending' },
  { id: 'colorear', name: 'Colorear', src: bonusColorear, status: 'pending' },
  { id: 'decodificador', name: 'Decodificador', src: bonusDecodificador, status: 'pending' },
  { id: 'diario', name: 'Diario', src: bonusDiario, status: 'pending' },
  { id: 'hogar', name: 'Hogar', src: bonusHogar, status: 'pending' },
  { id: 'linaje', name: 'Linaje', src: bonusLinaje, status: 'pending' },
  { id: 'meditaciones', name: 'Meditaciones', src: bonusMeditaciones, status: 'pending' },
  { id: 'oraculos', name: 'Oráculos', src: bonusOraculos, status: 'pending' },
];

export default function AdminRemoveBg() {
  const [images, setImages] = useState<BonusImage[]>(initialImages);
  const [modelLoading, setModelLoading] = useState(false);
  const [modelProgress, setModelProgress] = useState(0);
  const [isProcessingAll, setIsProcessingAll] = useState(false);

  const updateImage = (id: string, updates: Partial<BonusImage>) => {
    setImages(prev => prev.map(img => img.id === id ? { ...img, ...updates } : img));
  };

  const processImage = async (image: BonusImage) => {
    updateImage(image.id, { status: 'processing' });
    
    try {
      const imgElement = await loadImage(image.src);
      const blob = await removeBackground(imgElement);
      const url = URL.createObjectURL(blob);
      
      updateImage(image.id, { 
        status: 'done', 
        processedBlob: blob, 
        processedUrl: url 
      });
    } catch (error) {
      console.error(`Error processing ${image.name}:`, error);
      updateImage(image.id, { 
        status: 'error', 
        error: error instanceof Error ? error.message : 'Unknown error' 
      });
    }
  };

  const loadModel = async () => {
    setModelLoading(true);
    setModelProgress(0);
    try {
      await getSegmenter((progress) => setModelProgress(progress));
    } catch (error) {
      console.error('Error loading model:', error);
    }
    setModelLoading(false);
  };

  const processAll = async () => {
    setIsProcessingAll(true);
    
    // Load model first
    await loadModel();
    
    // Process images one by one
    for (const image of images) {
      if (image.status !== 'done') {
        await processImage(image);
      }
    }
    
    setIsProcessingAll(false);
  };

  const downloadImage = (image: BonusImage) => {
    if (!image.processedBlob) return;
    
    const a = document.createElement('a');
    a.href = URL.createObjectURL(image.processedBlob);
    a.download = `${image.id}-no-bg.png`;
    a.click();
  };

  const downloadAll = () => {
    images.forEach(img => {
      if (img.processedBlob) {
        downloadImage(img);
      }
    });
  };

  const doneCount = images.filter(img => img.status === 'done').length;

  return (
    <div className="min-h-screen bg-background p-4 sm:p-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Remover Fundo das Imagens de Bônus
          </h1>
          <p className="text-muted-foreground">
            Use IA para remover o fundo das 8 imagens de bônus automaticamente.
          </p>
        </div>

        {/* Controls */}
        <div className="flex flex-wrap gap-4 mb-8">
          <Button 
            onClick={processAll} 
            disabled={isProcessingAll || modelLoading}
            size="lg"
          >
            {isProcessingAll ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Processando...
              </>
            ) : (
              <>
                <Play className="mr-2 h-4 w-4" />
                Processar Todas
              </>
            )}
          </Button>
          
          <Button 
            onClick={downloadAll} 
            disabled={doneCount === 0}
            variant="outline"
            size="lg"
          >
            <Download className="mr-2 h-4 w-4" />
            Baixar Todas ({doneCount}/{images.length})
          </Button>
        </div>

        {/* Model Loading Progress */}
        {modelLoading && (
          <Card className="mb-8">
            <CardContent className="pt-6">
              <div className="flex items-center gap-4">
                <Loader2 className="h-5 w-5 animate-spin text-primary" />
                <div className="flex-1">
                  <p className="text-sm font-medium mb-2">Carregando modelo de IA...</p>
                  <Progress value={modelProgress} className="h-2" />
                </div>
                <span className="text-sm text-muted-foreground">{Math.round(modelProgress)}%</span>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Images Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {images.map((image) => (
            <Card key={image.id} className="overflow-hidden">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg flex items-center justify-between">
                  {image.name}
                  {image.status === 'done' && <CheckCircle className="h-5 w-5 text-green-500" />}
                  {image.status === 'error' && <XCircle className="h-5 w-5 text-red-500" />}
                  {image.status === 'processing' && <Loader2 className="h-5 w-5 animate-spin text-primary" />}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Before/After Comparison */}
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">Original</p>
                    <div className="aspect-square bg-muted rounded-lg overflow-hidden">
                      <img 
                        src={image.src} 
                        alt={`${image.name} original`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">Sem Fundo</p>
                    <div className="aspect-square bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHJlY3Qgd2lkdGg9IjEwIiBoZWlnaHQ9IjEwIiBmaWxsPSIjZTVlNWU1Ii8+PHJlY3QgeD0iMTAiIHk9IjEwIiB3aWR0aD0iMTAiIGhlaWdodD0iMTAiIGZpbGw9IiNlNWU1ZTUiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] rounded-lg overflow-hidden">
                      {image.processedUrl ? (
                        <img 
                          src={image.processedUrl} 
                          alt={`${image.name} sem fundo`}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-muted-foreground text-xs">
                          {image.status === 'processing' ? 'Processando...' : 'Aguardando'}
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Error Message */}
                {image.error && (
                  <p className="text-xs text-red-500">{image.error}</p>
                )}

                {/* Actions */}
                <div className="flex gap-2">
                  <Button 
                    onClick={() => processImage(image)} 
                    disabled={image.status === 'processing' || isProcessingAll}
                    size="sm"
                    variant="outline"
                    className="flex-1"
                  >
                    {image.status === 'processing' ? (
                      <Loader2 className="h-4 w-4 animate-spin" />
                    ) : (
                      'Processar'
                    )}
                  </Button>
                  <Button 
                    onClick={() => downloadImage(image)} 
                    disabled={!image.processedBlob}
                    size="sm"
                    variant="secondary"
                  >
                    <Download className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Instructions */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Instruções</CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground space-y-2">
            <p>1. Clique em "Processar Todas" para remover o fundo de todas as imagens</p>
            <p>2. Aguarde o modelo de IA carregar (primeira vez pode demorar)</p>
            <p>3. As imagens serão processadas uma por uma</p>
            <p>4. Clique em "Baixar Todas" para salvar as imagens sem fundo</p>
            <p>5. Substitua os arquivos em <code className="bg-muted px-1 rounded">src/assets/bonus/</code></p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
