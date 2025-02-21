<template>
  <div class="pdf-container">
    <p>page:{{ currentpage }} positionx:{{ mouseX }} positionY:{{ mouseY }}</p>

    <canvas ref="canvasRef" @click="mousePos"></canvas>
    <div class=" flex flex-col items-center jutify-center  my-4">
    

      <div class="flex  items-center jutify-center ">
        <button
          @click="prevPage" :disabled="currentpage <= 1"  class="flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-gray-800 rounded-s hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            <svg
              class="w-3.5 h-3.5 me-2 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 5H1m0 0 4 4M1 5l4-4"
              />
            </svg>
            
          </button>
          <span class="text-sm text-gray-700 ">
          Page
          <span class="font-semibold text-gray-900 ">{{ currentpage }}</span> Sur
          <span class="font-semibold text-gray-900 ">{{ totalpages }}</span> 
         
          
        </span>
          <button
          @click="nextPage" :disabled="currentpage >= totalpages " class="flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-gray-800 border-0 border-s border-gray-700 rounded-e hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
           
            <svg
              class="w-3.5 h-3.5 ms-2 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </button>
    
       
      </div>
    
    </div>
  </div>
  
    <!-- <pre class="mt-4 p-3 bg-gray-100 border rounded">{{ signataireView }}</pre> -->
</template>

<script>
import * as pdfjsLib from "pdfjs-dist/legacy/build/pdf";
import pdfWorker from "pdfjs-dist/legacy/build/pdf.worker?url";
pdfjsLib.GlobalWorkerOptions.workerSrc = pdfWorker;

export default {
  props: {
    base64pdf: String,
    signataires: Array,
  },
  data() {
    return {
      pdfData: null,
      currentpage: 1,
      totalpages: 1,
      scale: 1,
      canvas: null,
      ctx: null,
      pdf: null,
      reference: false,
      mouseX: 0,
      mouseY: 0,
      signataireView: [],
    };
  },
  mounted() {
    this.canvas = this.$refs.canvasRef;
    this.ctx = this.canvas.getContext("2d");
    this.loadPdf(this.base64pdf);
    this.loadSignataires();
  },
  methods: {
    mousePos(event) {
      const rect = this.canvas.getBoundingClientRect(); //retourne les dimension relle de canva
      const scaleX = this.canvas.width / rect.width; //corrige la deffirence entre canva etpdf retourné
      const scaleY = this.canvas.height / rect.height;

      const pdfX = (event.clientX - rect.left) * scaleX;
      const pdfY = this.canvas.height - (event.clientY - rect.top) * scaleY;

      this.mouseX = pdfX.toFixed(2);
      this.mouseY = pdfY.toFixed(2);
    },
    async loadSignataires(){
if (this.signataires && Array.isArray(this.signataires)) {
        this.signataireView = this.signataires;
      } else {
        console.error("No signataires provided or incorrect format.");
      }
    },

    async loadPdf(pdfdoc) {
      try {
        //convertir chanine de base 64 to chaine binaire
        this.pdfData = atob(pdfdoc);
        console.log("base64 to atob" + this.pdfData);
        pdfjsLib.GlobalWorkerOptions.workerSrc = pdfWorker;

        const pdf = await pdfjsLib.getDocument({ data: this.pdfData }).promise;
        this.totalpages = pdf.numPages;
        await this.renderPage(pdf, this.currentpage);
      } catch (error) {
        console.error("Error loading PDF:", error);
      }
    },

    async renderPage(pdf, pageNumber) {
      try {
        const page = await pdf.getPage(pageNumber);

        if (!page) {
          console.warn(`Page ${pageNumber} not available.`);
          return;
        }

        const viewport = page.getViewport({ scale: this.scale });

        this.canvas.height = viewport.height;
        this.canvas.width = viewport.width;

        const renderContext = {
          canvasContext: this.ctx,
          viewport: viewport,
        };

        await page.render(renderContext).promise;
        console.log(`Page ${pageNumber} rendered`);
      } catch (error) {
        console.error(`Error rendering page ${pageNumber}:`, error);
      }
    },
    async prevPage() {
      this.currentpage--;
      const pdf = await pdfjsLib.getDocument({ data: this.pdfData }).promise;
      this.renderPage(pdf, this.currentpage);
    },
    async nextPage() {
      this.currentpage++;
      const pdf = await pdfjsLib.getDocument({ data: this.pdfData }).promise;
      this.renderPage(pdf, this.currentpage);
    },
  },
};
</script>

<style scoped>
.pdf-container {
  text-align: center;
  padding: 20px;
}
canvas {
  border: 1px solid #ccc;
  margin-top: 10px;
  cursor: crosshair;
}
.controls {
  display: flex;
  justify-content: center;
  margin-top: 10px;
}
button {
  margin: 0 5px;
}
</style>
