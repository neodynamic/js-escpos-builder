namespace Neodynamic.JSESCPOSBuilder {
  export class ESCPOSImageSize {
    public width: number = 0;
    public height: number = 0;
    public colors: number = 0;

    constructor(width?: number, height?: number, colors?: number) {
      if (width)
        this.width = width;
      if (height)
        this.height = height;
      if (colors)
        this.colors = colors;
    }
  }

  type ESCPOSImagePixel = {
    r: number,
    g: number,
    b: number,
    a: number
  };

  export class ESCPOSImage {
    public pixels?: PixelsStruct;
    public data: number[] = [];

    private rgb(pixel: number[]): ESCPOSImagePixel {
      return {
        r: pixel[0],
        g: pixel[1],
        b: pixel[2],
        a: pixel[3]
      };
    }

    constructor(pixels: PixelsStruct) {
      this.pixels = pixels;
      if (!this.size)
        throw "Invalid size";
      let temp_arr: ESCPOSImagePixel[] = [];
      for (var i = 0; i < this.pixels.data.length; i += this.size.colors) {
        let color_arr = new Array(this.size.colors).fill(0);
        let d = this.rgb(color_arr.map((_, b) => this.pixels!.data[i + b]));
        temp_arr.push(d);
      };

      this.data = temp_arr.map((pixel) => {
        if (pixel.a == 0) return 0;
        return pixel.r !== 0xFF || pixel.g !== 0xFF || pixel.b !== 0xFF ? 1 : 0;
      });
    }

    public static load(b64_image: string): Promise<ESCPOSImage> {
      return new Promise<ESCPOSImage>((ok, err) => {
        GetPixels.getPixels(b64_image)
          .then((value: PixelsStruct) => {
              ok(new ESCPOSImage(value));
          })
          .catch((reason) => {
            err(reason);
          });
      });
    }

    get size(): ESCPOSImageSize | undefined {
      if (!this.pixels)
        return undefined;
      return new ESCPOSImageSize(this.pixels.shape[0], this.pixels.shape[1], this.pixels.shape[2]);
    }

    public toBitmap(density: number) {
      if (!this.size)
        return undefined;

      density = density || 24;

      var ld: number[] = [];
      var result: number[][] = [];
      var x: number, y: number, b: number, l: number, i: number;
      var c = density / 8;
      var n = Math.ceil(this.size.height / density);

      for (y = 0; y < n; y++) {
        ld = [];
        result[y] = [];
        for (x = 0; x < this.size.width; x++) {

          for (b = 0; b < density; b++) {
            i = x * c + (b >> 3);

            if (ld[i] === undefined) {
              ld[i] = 0;
            }

            l = y * density + b;
            if (l < this.size.height) {
              if (this.data[l * this.size.width + x]) {
                ld[i] += (0x80 >> (b & 0x7));
              }
            }
          }
        }
        result[y] = ld;
      }

      return {
        data: result,
        density: density
      };
    }

    public toRaster() {
      if (!this.size)
        return undefined;
      var result = [];
      var width = this.size.width;
      var height = this.size.height;
      var data = this.data;

      // n blocks of lines
      var n = Math.ceil(width / 8);
      var x: number, y: number, b: number, c: number, i: number;

      for (y = 0; y < height; y++) {

        for (x = 0; x < n; x++) {

          for (b = 0; b < 8; b++) {
            i = x * 8 + b;

            if (result[y * n + x] === undefined) {
              result[y * n + x] = 0;
            }

            c = x * 8 + b;
            if (c < width) {
              if (data[y * width + i]) {
                result[y * n + x] += (0x80 >> (b & 0x7));
              }
            }
          }
        }
      }
      return {
        data: result,
        width: n,
        height: height
      };
    }
  }
}