namespace Neodynamic.JSESCPOSBuilder {
  export type PixelsStruct = {
    data: Uint8Array,
    shape: number[],
    stride: number[]
  }
  export class GetPixels {
    public static getPixels(b64_image: string): Promise<PixelsStruct> {
      return new Promise((ok, err) => {
        let img = new Image();
        img.crossOrigin = "Anonymous";
        img.onload = () => {
          let canvas = document.createElement('canvas');
          canvas.width = img.width;
          canvas.height = img.height;
          let context = canvas.getContext('2d');
          context.drawImage(img, 0, 0);
          let pixels = context.getImageData(0, 0, img.width, img.height);
          ok({ data: new Uint8Array(pixels.data), shape: [img.width, img.height, 4], stride: [4, 4 * img.width, 1] });
        }
        img.onerror = (e) => { err(e); }
        img.src = b64_image;
      });
    }
  }
}