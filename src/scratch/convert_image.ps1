Add-Type -AssemblyName PresentationCore
$src = "c:\Users\Administrator\Desktop\ukko\public\about-paneles.webp"
$dst = "c:\Users\Administrator\Desktop\ukko\public\opengraph-image.jpg"

try {
    $stream = [System.IO.File]::OpenRead($src)
    $decoder = [System.Windows.Media.Imaging.BitmapDecoder]::Create($stream, [System.Windows.Media.Imaging.BitmapCreateOptions]::None, [System.Windows.Media.Imaging.BitmapCacheOption]::Default)
    $frame = $decoder.Frames[0]
    
    $encoder = New-Object System.Windows.Media.Imaging.JpegBitmapEncoder
    $encoder.Frames.Add($frame)
    
    $outStream = [System.IO.File]::OpenWrite($dst)
    $encoder.Save($outStream)
    $outStream.Close()
    $stream.Close()
    Write-Host "Success: Image converted to $dst"
} catch {
    Write-Error "Failed to convert image: $_"
}
