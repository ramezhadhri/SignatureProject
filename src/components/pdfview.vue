<template>
  <div class="px-20 grid grid-cols-6 gap-2">
    <div class="block col-span-4">
      <canvas ref="canvasRef" class="border border-black border-2"></canvas>
      <div class="flex items-center justify-start my-2 ml-32">
        <button
          @click="prevPage"
          :disabled="currentpage <= 1"
          class="flex items-center justify-center px-3 h-8"
        >
          <svg
            class="w-6 h-6 text-gray-800"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m17 16-4-4 4-4m-6 8-4-4 4-4"
            />
          </svg>
        </button>
        <span class="text-sm text-gray-700 mx-4">
          Page
          <span class="font-semibold text-gray-900">{{ currentpage }}</span>
          Sur
          <span class="font-semibold text-gray-900">{{ totalpages }}</span>
        </span>
        <button
          @click="nextPage"
          :disabled="currentpage >= totalpages"
          class="flex items-center justify-center px-3 h-8"
        >
          <svg
            class="w-6 h-6 text-gray-800"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m7 16 4-4-4-4m6 8 4-4-4-4"
            />
          </svg>
        </button>
      </div>
    </div>
    <div class="signataires-view col-span-2">
      <div class="signataires-view mt-6 p-4 bg-gray-100 rounded-md">
        <h3 class="text-lg font-semibold mb-2">Choisissez un signataire :</h3>
        <select v-model="selectedSignataire" class="w-full p-2 border rounded">
          <option
            v-for="signataire in signataireView"
            :key="signataire.email"
            :value="signataire"
          >
            {{ signataire.nom }} {{ signataire.prenom }}
          </option>
        </select>
        <p v-if="selectedSignataire" class="mt-2 text-gray-700">
          Email: {{ selectedSignataire.email }}
        </p>
      </div>
      <div class="bg-gray-100 border rounded mt-6 p-4">
        <h3 class="text-lg font-semibold mb-2">Signatures enregistrées :</h3>
        <div
          v-for="(signature, index) in signatureDivs"
          :key="index"
          class="border rounded p-2 mb-2 bg-white shadow flex"
        >
          <div class="mx-2">
            <p class="font-semibold">
              Signataire: {{ signature.nom }} {{ signature.prenom }}
            </p>
            <p class="font-semibold">Page: {{ signature.page }}</p>

            <p class="font-semibold">Signature: {{ index + 1 }}</p>
          </div>
          <button
            @click="
              removeSignature(signature.email, signature.x, signature.y, index)
            "
            class="px-2 py-1 text-sm text-white bg-red-500 rounded"
          >
            Supprimer
          </button>
        </div>
      </div>

      <div class="signataires-view col-span-2">
        <div
          v-for="(signature, index) in signatureDivs"
          :key="index"
          class="signature-div no-select"
          :style="{
            left: signature.x + 'px',
            top: signature.y + 'px',
            display: signature.page === currentpage ? 'flex' : 'none',
          }"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15"
            />
          </svg>
          <h1>signature</h1>
          <span class="absolute top-2 right-2 text-sm">
            {{ index + 1 }}
          </span>
        </div>

        <div
          class="flex flex-col justify-center items-center no-select"
          :style="divStyle"
          @mousedown="startDrag"
          @mousemove="dragDiv"
          @mouseup="stopDrag"
          ref="draggableDiv"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15"
            />
          </svg>
          <h1>signature</h1>
        </div>

        <button
          @click="addSignature"
          class="my-4 py-1.5 px-2 inline-flex items-center gap-x-1 text-xs font-medium rounded-full border border-dashed border-gray-200 bg-white text-gray-800 hover:bg-gray-50 focus:outline-none focus:bg-gray-50"
        >
          <svg
            class="shrink-0 size-3.5"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M5 12h14"></path>
            <path d="M12 5v14"></path>
          </svg>
          Ajouter Cette Signature
        </button>

        <!-- <p>x:{{ mouseX }} y:{{ mouseY }}</p> -->
      </div>
    </div>
  </div>
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
      scale: 0.75,
      canvas: null,
      ctx: null,
      pdf: null,
      reference: false,
      mouseX: 0,
      mouseY: 0,
      signataireView: [],
      signaturePositions: [],
      signatureDivs: [],

      estClique: false,
      offsetX: 0,
      offsetY: 0,
      initialDivStyle: {
        width: "130px",
        height: "70px",
        backgroundColor: "rgba(240, 240, 240, 0.8)",
        boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.3)",
        border: "2px solid black",
        position: "absolute",
        top: "70px",
        right: "500px",
        cursor: "grab",
      },
      divStyle: {
        width: "130px",
        height: "70px",
        backgroundColor: "rgba(240, 240, 240, 0.8)",
        boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.3)",
        border: "2px solid black",
        position: "absolute",
        top: "70px",
        right: "500px",
        cursor: "grab",
      },
      selectedSignataire: null,
    };
  },
  mounted() {
    this.canvas = this.$refs.canvasRef;
    this.ctx = this.canvas.getContext("2d");
    this.loadPdf(this.base64pdf);
    this.loadSignataires();
    this.signatureDivs = [...this.signaturePositions];
  },
  watch: {
    signataireView: {
      immediate: true,
      handler(newSignataireView) {
        if (newSignataireView && newSignataireView.length > 0) {
          this.selectedSignataire = newSignataireView[0];
        }
      },
    },
  },
  methods: {
    removeSignature(email, x, y, index) {
      console.log(index);
      const indexToRemove = this.signatureDivs.findIndex(
        (s) => s.email === email && s.x === x && s.y === y
      );
      if (indexToRemove !== -1) {
        this.signatureDivs.splice(indexToRemove, 1);
      }
      const indexToRemoveSignatures = this.signaturePositions.findIndex(
        (s) => s.email === email && s.x === x && s.y === y
      );
      if (indexToRemoveSignatures !== -1) {
        this.signaturePositions.splice(indexToRemoveSignatures, 1);
      }

      this.$emit("signature-positions", this.signaturePositions);
    },

    startDrag(e) {
      this.estClique = true;
      this.offsetX = e.clientX - this.$refs.draggableDiv.offsetLeft;
      this.offsetY = e.clientY - this.$refs.draggableDiv.offsetTop;
      this.divStyle.cursor = "grabbing";
    },

    stopDrag() {
      this.estClique = false;
      this.divStyle.cursor = "grab";
    },

    dragDiv(e) {
      if (!this.estClique) return;

      const newX = e.clientX - this.offsetX;
      const newY = e.clientY - this.offsetY;

      this.divStyle = {
        ...this.divStyle,
        left: `${newX}px`,
        top: `${newY}px`,
      };
      this.mouseX = newX;
      this.mouseY = newY;
    },
    addSignature() {
      const canvasRect = this.$refs.canvasRef.getBoundingClientRect();
      const divRect = this.$refs.draggableDiv.getBoundingClientRect();

      const relativeX = divRect.left - canvasRect.left;
      const relativeY = divRect.top - canvasRect.top;

      const scaleX = this.canvas.width / canvasRect.width;
      const scaleY = this.canvas.height / canvasRect.height;

      const x = (relativeX * scaleX).toFixed(2);
      const y = (this.canvas.height - relativeY * scaleY - 70).toFixed(2);

      if (
        x <= this.canvas.width - 125 &&
        x > -5 &&
        y > -5 &&
        y <= this.canvas.height - 65
      ) {
        if (this.selectedSignataire) {
          let signataireEntry = this.signaturePositions.find(
            (entry) => entry.email === this.selectedSignataire.email
          );

          if (!signataireEntry) {
            signataireEntry = {
              email: this.selectedSignataire.email,
              positions: [],
            };
            this.signaturePositions.push(signataireEntry);
          }

          signataireEntry.positions.push({
            pageNumber: this.currentpage,
            x: parseFloat(x),
            y: parseFloat(y),
          });

          this.signatureDivs.push({
            email: this.selectedSignataire.email,
            nom: this.selectedSignataire.nom,
            prenom: this.selectedSignataire.prenom,
            page: this.currentpage,
            x: parseFloat(this.mouseX),
            y: parseFloat(this.mouseY),
          });

          this.$emit("signature-positions", this.signaturePositions);
        }

        
        this.divStyle = { ...this.initialDivStyle };
      }else{
        alert("ne depasser pas le pdf");
      }
    },

    async loadSignataires() {
      if (this.signataires && Array.isArray(this.signataires)) {
        this.signataireView = this.signataires;
      } else {
        console.error("No signataires provided or incorrect format.");
      }
    },

    async loadPdf(pdfdoc) {
      try {
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
.no-select {
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
}

.signature-div {
  width: 130px;
  height: 70px;
  background-color: rgba(240, 240, 240, 0.8);
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
  border: 2px solid black;
  position: absolute;
  cursor: default;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

/* .signature-count {
  position: absolute;
  top: 5px;
  right: 5px;
  font-size: 0.8em;
} */
</style>
