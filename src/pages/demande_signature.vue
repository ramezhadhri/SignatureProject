<template>
  <div class="">
    <h1 class="text-center text-5xl font-bold my-8">Demandez une signature</h1>
    <div class="">
      <div v-if="currentStep === 0" id="step-0">
        <div class="flex flex-col justify-center border border-black border-4">
          <div class="w-full my-8">
            <!-- Stepper -->
            <ul class="relative flex flex-col md:flex-row gap-2 my-4 mx-8">
              <!-- Item -->
              <li
                class="md:shrink md:basis-0 flex-1 group flex gap-x-2 md:block"
              >
                <div
                  class="min-w-7 min-h-7 flex flex-col items-center md:w-full md:inline-flex md:flex-wrap md:flex-row text-xs align-middle"
                >
                  <span
                    class="size-7 flex justify-center items-center shrink-0 bg-[#2563eb] font-medium text-gray-100 rounded-full"
                  >
                    1
                  </span>
                  <div
                    class="mt-2 w-px h-full md:mt-0 md:ms-2 md:w-full md:h-px md:flex-1 bg-gray-200 group-last:hidden"
                  ></div>
                </div>
                <div class="grow md:grow-0 md:mt-3 pb-5">
                  <span class="block text-sm font-medium text-gray-800">
                    Chargez des documents
                  </span>
                  <p class="text-sm text-gray-500">
                    Chargez vos documents PDF à faire signer
                  </p>
                </div>
              </li>
              <!-- End Item -->

              <!-- Item -->
              <li
                class="md:shrink md:basis-0 flex-1 group flex gap-x-2 md:block"
              >
                <div
                  class="min-w-7 min-h-7 flex flex-col items-center md:w-full md:inline-flex md:flex-wrap md:flex-row text-xs align-middle"
                >
                  <span
                    class="size-7 flex justify-center items-center shrink-0 bg-gray-100 font-medium text-gray-800 rounded-full"
                  >
                    2
                  </span>
                  <div
                    class="mt-2 w-px h-full md:mt-0 md:ms-2 md:w-full md:h-px md:flex-1 bg-gray-200 group-last:hidden"
                  ></div>
                </div>
                <div class="grow md:grow-0 md:mt-3 pb-5">
                  <span class="block text-sm font-medium text-gray-800">
                    Saisissez les signataires.
                  </span>
                  <p class="text-sm text-gray-500">
                    Saisissez les signataires qui vont signer votre document.
                  </p>
                </div>
              </li>
              <!-- End Item -->

              <!-- Item -->
              <li
                class="md:shrink md:basis-0 flex-1 group flex gap-x-2 md:block"
              >
                <div
                  class="min-w-7 min-h-7 flex flex-col items-center md:w-full md:inline-flex md:flex-wrap md:flex-row text-xs align-middle"
                >
                  <span
                    class="size-7 flex justify-center items-center shrink-0 bg-gray-100 font-medium text-gray-800 rounded-full"
                  >
                    3
                  </span>
                  <div
                    class="mt-2 w-px h-full md:mt-0 md:ms-2 md:w-full md:h-px md:flex-1 bg-gray-200 group-last:hidden"
                  ></div>
                </div>
                <div class="grow md:grow-0 md:mt-3 pb-5">
                  <span class="block text-sm font-medium text-gray-800">
                    Positionnez les signatures
                  </span>
                  <p class="text-sm text-gray-500">
                    Positionnez les signatures à l’endroit souhaité .
                  </p>
                </div>
              </li>
              <li
                class="md:shrink md:basis-0 flex-1 group flex gap-x-2 md:block"
              >
                <div
                  class="min-w-7 min-h-7 flex flex-col items-center md:w-full md:inline-flex md:flex-wrap md:flex-row text-xs align-middle"
                >
                  <span
                    class="size-7 flex justify-center items-center shrink-0 bg-gray-100 font-medium text-gray-800 rounded-full"
                  >
                    4
                  </span>
                  <div
                    class="mt-2 w-px h-full md:mt-0 md:ms-2 md:w-full md:h-px md:flex-1 bg-gray-200 group-last:hidden"
                  ></div>
                </div>
                <div class="grow md:grow-0 md:mt-3 pb-5">
                  <span class="block text-sm font-medium text-gray-800">
                    Demandez une signature
                  </span>
                  <p class="text-sm text-gray-500">
                    Envoyez votre demande de signature
                  </p>
                </div>
              </li>
              <!-- End Item -->
            </ul>
            <!-- End Stepper -->
          </div>
          <div class="block">
            <div class="mx-8">
              <h1 class="text-start text-2xl font-bold">
                Chargez vos documents PDF :
              </h1>
            </div>
            <div class="mx-8 my-4 flex items-center">
              <div><h1 class="mx-2">Document PDF :</h1></div>
              <div class="mx-2 overflow-hidden rounded-xl">
                <input
                  type="file"
                  accept="application/pdf" @change="handlepdf"
                  class="block w-full text-sm text-gray-500 file:me-4 file:rounded-xl file:py-2 file:border-1 file:text-sm file:font-semibold file:bg-blue-600 file:text-white hover:file:bg-blue-700 file:disabled:opacity-50 file:disabled:pointer-events-none"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-if="currentStep === 1" id="step-1">
        <div class="flex flex-col justify-center border border-black border-4">
          <div class="w-full my-8">
            <!-- Stepper -->
            <ul class="relative flex flex-col md:flex-row gap-2 my-4 mx-8">
              <!-- Item -->
              <li
                class="md:shrink md:basis-0 flex-1 group flex gap-x-2 md:block"
              >
                <div
                  class="min-w-7 min-h-7 flex flex-col items-center md:w-full md:inline-flex md:flex-wrap md:flex-row text-xs align-middle"
                >
                  <span
                    class="size-7 flex justify-center items-center shrink-0 bg-[#2563eb] font-medium text-gray-100 rounded-full"
                  >
                    1
                  </span>
                  <div
                    class="mt-2 w-px h-full md:mt-0 md:ms-2 md:w-full md:h-px md:flex-1 bg-gray-200 group-last:hidden"
                  ></div>
                </div>
                <div class="grow md:grow-0 md:mt-3 pb-5">
                  <span class="block text-sm font-medium text-gray-800">
                    Chargez des documents
                  </span>
                  <p class="text-sm text-gray-500">
                    Chargez vos documents PDF à faire signer
                  </p>
                </div>
              </li>

              <li
                class="md:shrink md:basis-0 flex-1 group flex gap-x-2 md:block"
              >
                <div
                  class="min-w-7 min-h-7 flex flex-col items-center md:w-full md:inline-flex md:flex-wrap md:flex-row text-xs align-middle"
                >
                  <span
                    class="size-7 flex justify-center items-center shrink-0 bg-[#2563eb] font-medium text-gray-100 rounded-full"
                  >
                    2
                  </span>
                  <div
                    class="mt-2 w-px h-full md:mt-0 md:ms-2 md:w-full md:h-px md:flex-1 bg-gray-200 group-last:hidden"
                  ></div>
                </div>
                <div class="grow md:grow-0 md:mt-3 pb-5">
                  <span class="block text-sm font-medium text-gray-800">
                    Saisissez les signataires.
                  </span>
                  <p class="text-sm text-gray-500">
                    Saisissez les signataires qui vont signer votre document.
                  </p>
                </div>
              </li>
              <!-- End Item -->

              <!-- Item -->
              <li
                class="md:shrink md:basis-0 flex-1 group flex gap-x-2 md:block"
              >
                <div
                  class="min-w-7 min-h-7 flex flex-col items-center md:w-full md:inline-flex md:flex-wrap md:flex-row text-xs align-middle"
                >
                  <span
                    class="size-7 flex justify-center items-center shrink-0 bg-gray-100 font-medium text-gray-800 rounded-full"
                  >
                    3
                  </span>
                  <div
                    class="mt-2 w-px h-full md:mt-0 md:ms-2 md:w-full md:h-px md:flex-1 bg-gray-200 group-last:hidden"
                  ></div>
                </div>
                <div class="grow md:grow-0 md:mt-3 pb-5">
                  <span class="block text-sm font-medium text-gray-800">
                    Positionnez les signatures
                  </span>
                  <p class="text-sm text-gray-500">
                    Positionnez les signatures à l’endroit souhaité .
                  </p>
                </div>
              </li>
              <li
                class="md:shrink md:basis-0 flex-1 group flex gap-x-2 md:block"
              >
                <div
                  class="min-w-7 min-h-7 flex flex-col items-center md:w-full md:inline-flex md:flex-wrap md:flex-row text-xs align-middle"
                >
                  <span
                    class="size-7 flex justify-center items-center shrink-0 bg-gray-100 font-medium text-gray-800 rounded-full"
                  >
                    4
                  </span>
                  <div
                    class="mt-2 w-px h-full md:mt-0 md:ms-2 md:w-full md:h-px md:flex-1 bg-gray-200 group-last:hidden"
                  ></div>
                </div>
                <div class="grow md:grow-0 md:mt-3 pb-5">
                  <span class="block text-sm font-medium text-gray-800">
                    Demandez une signature
                  </span>
                  <p class="text-sm text-gray-500">
                    Envoyez votre demande de signature
                  </p>
                </div>
              </li>
              <!-- End Item -->
            </ul>
            <!-- End Stepper -->
          </div>
          <div class="block">
            <div class="mx-8">
              <h1 class="text-center text-2xl font-bold my-4">
                Saisissez les signataires
              </h1>
              <p class="text-center text-lg font-meduim my-4 text-gray-500">
                Attention saisissez les signataires par ordre de signature.
              </p>
            </div>
            <div class="mb-8 mx-4">
              <div class="border rounded-lg overflow-hidden">
                <table class="min-w-full divide-y divide-gray-200">
                  <thead class="bg-neutral-700">
                    <tr>
                      <th
                        class="px-6 py-3 text-start text-xs font-medium text-gray-100 uppercase"
                      >
                        Prénom
                      </th>
                      <th
                        class="px-6 py-3 text-start text-xs font-medium text-gray-100 uppercase"
                      >
                        Nom
                      </th>
                      <th
                        class="px-6 py-3 text-start text-xs font-medium text-gray-100 uppercase"
                      >
                        Email
                      </th>
                      <th
                        class="px-6 py-3 text-start text-xs font-medium text-gray-100 uppercase"
                      >
                        Mobile
                      </th>
                      <th
                        class="px-6 py-3 text-end text-xs font-medium text-gray-100 uppercase"
                      ></th>
                    </tr>
                  </thead>
                  <tbody class="divide-y divide-gray-200">
                    <tr v-for="(row, index) in signataires" :key="index">
                      <td
                        class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800"
                      >
                        <input
                          v-model="row.prenom"
                          type="text"
                          class="py-3 px-4 block w-full border border-gray-500 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500"
                          placeholder="Prénom Signataire"
                        />
                      </td>
                      <td
                        class="px-6 py-4 whitespace-nowrap text-sm text-gray-800"
                      >
                        <input
                          v-model="row.nom"
                          type="text"
                          class="py-3 px-4 block w-full border border-gray-500 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500"
                          placeholder="Nom Signataire"
                        />
                      </td>
                      <td
                        class="px-6 py-4 whitespace-nowrap text-sm text-gray-800"
                      >
                        <input
                          v-model="row.email"
                          type="email"
                          class="py-3 px-4 block w-full border border-gray-500 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500"
                          placeholder="Email Signataire"
                        />
                      </td>
                      <td
                        class="px-6 py-4 whitespace-nowrap text-sm font-medium"
                      >
                        <div
                          class="max-w-sm flex items-center border border-gray-500 rounded-lg focus-within:border-blue-500"
                        >
                          <label class="mx-2">
                            <img
                              width="40"
                              height="40"
                              src="https://img.icons8.com/color/48/tunisia.png"
                              alt="tunisia"
                            />
                          </label>
                          <input
                            v-model="row.mobile"
                            type="tel"
                            class="py-3 px-4 block w-full text-sm focus:border-blue-500 rounded-lg focus:ring-blue-500"
                            placeholder="Téléphone Signataire"
                            pattern="[0-9]{8}"
                          />
                        </div>
                      </td>
                      <td
                        class="px-6 py-4 whitespace-nowrap text-end text-sm font-medium"
                      >
                        <button
                          @click="removeRow(index)"
                          class="text-red-600 hover:text-red-800 font-semibold"
                        >
                          Supprimer
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p class="mt-3 text-end">
                <button
                  @click="addRow"
                  class="py-1.5 px-2 inline-flex items-center gap-x-1 text-xs font-medium rounded-full border border-dashed border-gray-200 bg-white text-gray-800 hover:bg-gray-50 focus:outline-none focus:bg-gray-50"
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
                  Ajouter Signataire
                </button>
              </p>

              <!-- <pre class="mt-4 p-3 bg-gray-100 border rounded">{{ signataires }}</pre> -->
            </div>
          </div>
        </div>
      </div>
      <div v-if="currentStep === 2" id="step-2">
        <div class="flex flex-col justify-center border border-black border-4">
          <div class="w-full my-8">
            <!-- Stepper -->
            <ul class="relative flex flex-col md:flex-row gap-2 my-4 mx-8">
              <!-- Item -->
              <li
                class="md:shrink md:basis-0 flex-1 group flex gap-x-2 md:block"
              >
                <div
                  class="min-w-7 min-h-7 flex flex-col items-center md:w-full md:inline-flex md:flex-wrap md:flex-row text-xs align-middle"
                >
                  <span
                    class="size-7 flex justify-center items-center shrink-0 bg-[#2563eb] font-medium text-gray-100 rounded-full"
                  >
                    1
                  </span>
                  <div
                    class="mt-2 w-px h-full md:mt-0 md:ms-2 md:w-full md:h-px md:flex-1 bg-gray-200 group-last:hidden"
                  ></div>
                </div>
                <div class="grow md:grow-0 md:mt-3 pb-5">
                  <span class="block text-sm font-medium text-gray-800">
                    Chargez des documents
                  </span>
                  <p class="text-sm text-gray-500">
                    Chargez vos documents PDF à faire signer
                  </p>
                </div>
              </li>
              <!-- End Item -->

              <!-- Item -->
              <li
                class="md:shrink md:basis-0 flex-1 group flex gap-x-2 md:block"
              >
                <div
                  class="min-w-7 min-h-7 flex flex-col items-center md:w-full md:inline-flex md:flex-wrap md:flex-row text-xs align-middle"
                >
                  <span
                    class="size-7 flex justify-center items-center shrink-0 bg-[#2563eb] font-medium text-gray-100 rounded-full"
                  >
                    2
                  </span>
                  <div
                    class="mt-2 w-px h-full md:mt-0 md:ms-2 md:w-full md:h-px md:flex-1 bg-gray-200 group-last:hidden"
                  ></div>
                </div>
                <div class="grow md:grow-0 md:mt-3 pb-5">
                  <span class="block text-sm font-medium text-gray-800">
                    Saisissez les signataires.
                  </span>
                  <p class="text-sm text-gray-500">
                    Saisissez les signataires qui vont signer votre document.
                  </p>
                </div>
              </li>
              <!-- End Item -->

              <!-- Item -->
              <li
                class="md:shrink md:basis-0 flex-1 group flex gap-x-2 md:block"
              >
                <div
                  class="min-w-7 min-h-7 flex flex-col items-center md:w-full md:inline-flex md:flex-wrap md:flex-row text-xs align-middle"
                >
                  <span
                    class="size-7 flex justify-center items-center shrink-0 bg-[#2563eb] font-medium text-gray-100 rounded-full"
                  >
                    3
                  </span>
                  <div
                    class="mt-2 w-px h-full md:mt-0 md:ms-2 md:w-full md:h-px md:flex-1 bg-gray-200 group-last:hidden"
                  ></div>
                </div>
                <div class="grow md:grow-0 md:mt-3 pb-5">
                  <span class="block text-sm font-medium text-gray-800">
                    Positionnez les signatures
                  </span>
                  <p class="text-sm text-gray-500">
                    Positionnez les signatures à l’endroit souhaité .
                  </p>
                </div>
              </li>
              <li
                class="md:shrink md:basis-0 flex-1 group flex gap-x-2 md:block"
              >
                <div
                  class="min-w-7 min-h-7 flex flex-col items-center md:w-full md:inline-flex md:flex-wrap md:flex-row text-xs align-middle"
                >
                  <span
                    class="size-7 flex justify-center items-center shrink-0 bg-gray-100 font-medium text-gray-800 rounded-full"
                  >
                    4
                  </span>
                  <div
                    class="mt-2 w-px h-full md:mt-0 md:ms-2 md:w-full md:h-px md:flex-1 bg-gray-200 group-last:hidden"
                  ></div>
                </div>
                <div class="grow md:grow-0 md:mt-3 pb-5">
                  <span class="block text-sm font-medium text-gray-800">
                    Demandez une signature
                  </span>
                  <p class="text-sm text-gray-500">
                    Envoyez votre demande de signature
                  </p>
                </div>
              </li>
              <!-- End Item -->
            </ul>
            <!-- End Stepper -->
          </div>
          <div class="block">
            <div class="mx-8">
              <h1 class="text-center text-2xl font-bold">
                Positionnez les signatures
              </h1>
            </div>
            <div class="my-4 w-2/3 flex flex-col ">
              <button @click="loadPdf">affixher pdf</button>
              <canvas ref="canvasRef" class="border border-4 border-black"></canvas>
              <div class="flex items-center">
                <button @click="prevPage" :disabled="pagenum <= 1">Prev</button>
                <p id="pageNumber">Page {{ pagenum }} of {{ totalpages }}</p>
                <button @click="nextPage" :disabled="pagenum >= totalpages">
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-if="currentStep === 3" id="step-3">
        <div class="flex flex-col justify-center border border-black border-4">
          <div class="w-full my-8">
            <!-- Stepper -->
            <ul class="relative flex flex-col md:flex-row gap-2 my-4 mx-8">
              <!-- Item -->
              <li
                class="md:shrink md:basis-0 flex-1 group flex gap-x-2 md:block"
              >
                <div
                  class="min-w-7 min-h-7 flex flex-col items-center md:w-full md:inline-flex md:flex-wrap md:flex-row text-xs align-middle"
                >
                  <span
                    class="size-7 flex justify-center items-center shrink-0 bg-[#2563eb] font-medium text-gray-100 rounded-full"
                  >
                    1
                  </span>
                  <div
                    class="mt-2 w-px h-full md:mt-0 md:ms-2 md:w-full md:h-px md:flex-1 bg-gray-200 group-last:hidden"
                  ></div>
                </div>
                <div class="grow md:grow-0 md:mt-3 pb-5">
                  <span class="block text-sm font-medium text-gray-800">
                    Chargez des documents
                  </span>
                  <p class="text-sm text-gray-500">
                    Chargez vos documents PDF à faire signer
                  </p>
                </div>
              </li>
              <!-- End Item -->

              <!-- Item -->
              <li
                class="md:shrink md:basis-0 flex-1 group flex gap-x-2 md:block"
              >
                <div
                  class="min-w-7 min-h-7 flex flex-col items-center md:w-full md:inline-flex md:flex-wrap md:flex-row text-xs align-middle"
                >
                  <span
                    class="size-7 flex justify-center items-center shrink-0 bg-[#2563eb] font-medium text-gray-100 rounded-full"
                  >
                    2
                  </span>
                  <div
                    class="mt-2 w-px h-full md:mt-0 md:ms-2 md:w-full md:h-px md:flex-1 bg-gray-200 group-last:hidden"
                  ></div>
                </div>
                <div class="grow md:grow-0 md:mt-3 pb-5">
                  <span class="block text-sm font-medium text-gray-800">
                    Saisissez les signataires.
                  </span>
                  <p class="text-sm text-gray-500">
                    Saisissez les signataires qui vont signer votre document.
                  </p>
                </div>
              </li>
              <!-- End Item -->

              <!-- Item -->
              <li
                class="md:shrink md:basis-0 flex-1 group flex gap-x-2 md:block"
              >
                <div
                  class="min-w-7 min-h-7 flex flex-col items-center md:w-full md:inline-flex md:flex-wrap md:flex-row text-xs align-middle"
                >
                  <span
                    class="size-7 flex justify-center items-center shrink-0 bg-[#2563eb] font-medium text-gray-100 rounded-full"
                  >
                    3
                  </span>
                  <div
                    class="mt-2 w-px h-full md:mt-0 md:ms-2 md:w-full md:h-px md:flex-1 bg-gray-200 group-last:hidden"
                  ></div>
                </div>
                <div class="grow md:grow-0 md:mt-3 pb-5">
                  <span class="block text-sm font-medium text-gray-800">
                    Positionnez les signatures
                  </span>
                  <p class="text-sm text-gray-500">
                    Positionnez les signatures à l’endroit souhaité .
                  </p>
                </div>
              </li>
              <li
                class="md:shrink md:basis-0 flex-1 group flex gap-x-2 md:block"
              >
                <div
                  class="min-w-7 min-h-7 flex flex-col items-center md:w-full md:inline-flex md:flex-wrap md:flex-row text-xs align-middle"
                >
                  <span
                    class="size-7 flex justify-center items-center shrink-0 bg-[#2563eb] font-medium text-gray-100 rounded-full"
                  >
                    4
                  </span>
                  <div
                    class="mt-2 w-px h-full md:mt-0 md:ms-2 md:w-full md:h-px md:flex-1 bg-gray-200 group-last:hidden"
                  ></div>
                </div>
                <div class="grow md:grow-0 md:mt-3 pb-5">
                  <span class="block text-sm font-medium text-gray-800">
                    Demandez une signature
                  </span>
                  <p class="text-sm text-gray-500">
                    Envoyez votre demande de signature
                  </p>
                </div>
              </li>
              <!-- End Item -->
            </ul>
            <!-- End Stepper -->
          </div>
          <div class="block">
            <div class="mx-8">
              <h1 class="text-start text-2xl font-bold">
                Demandez une signature
              </h1>
            </div>
            <div class="mx-8 my-4 flex items-center">
              <!-- ramezhadhri -->
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="flex justify-between mx-8 my-4">
      <button
        class="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
        @click="prevStep"
        :disabled="currentStep === 0"
      >
        <svg
          class="shrink-0 size-4"
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
          <path d="M19 12H5"></path>
          <path d="m12 19-7-7 7-7"></path>
        </svg>
        Etape Précédente
      </button>
      <button
        class="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-[#2563eb] text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
        @click="nextStep"
        :disabled="currentStep === steps.length - 1"
      >
        Etape Suivante
        <svg
          class="shrink-0 size-4"
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
          <path d="m12 5 7 7-7 7"></path>
        </svg>
      </button>
    </div>
  </div>
</template>


<script>
import * as pdfjsLib from "pdfjs-dist/legacy/build/pdf";
import pdfWorker from "pdfjs-dist/legacy/build/pdf.worker?url";
pdfjsLib.GlobalWorkerOptions.workerSrc = pdfWorker;
export default {
  name: "DemandeSignature",
  data() {
    return {
      currentStep: 0,
      pdfData: null,
      pagenum: 1,
      totalpages: 1,
      scale: 1,
      canvas: null,
      ctx: null,
      pdf: null,
      base64pdf:"",
      signataires: [{ prenom: "", nom: "", email: "", mobile: "" }],
      steps: [
        { id: "step-0" },
        { id: "step-1" },
        { id: "step-2" },
        { id: "step-3" },
      ],
    };
  },
 mounted(){
  
    
 },

  methods: {
    async handlepdf(events){ const file = event.target.files[0];

if (file && file.type === "application/pdf") {
  const reader = new FileReader();

  reader.onload = async (e) => {
    this.base64pdf = e.target.result.split(",")[1];
    
   

    console.log(this.base64pdf);
    await this.loadPdf();
    
  };

  reader.readAsDataURL(file); // retourne application/pdf;base64,base64string
} else {
  console.error("Invalid file type. Please upload a PDF.");
}},

async loadPdf() {
      try {
        this.canvas = this.$refs.canvasRef;
    this.ctx = this.canvas.getContext("2d");
        //convertir chanine de base 64 to chaine binaire
        this.pdfData = atob(this.base64pdf);
        console.log("base64 to atob"+this.pdfData)
        pdfjsLib.GlobalWorkerOptions.workerSrc = pdfWorker;

        const pdf = await pdfjsLib.getDocument({ data: this.pdfData }).promise;
        this.totalpages = pdf.numPages;
        await this.renderPage(pdf, this.pagenum);
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
      this.pagenum--;
      const pdf = await pdfjsLib.getDocument({ data: this.pdfData }).promise;
      this.renderPage(pdf, this.pagenum);
    },
    async nextPage() {
      this.pagenum++;
      const pdf = await pdfjsLib.getDocument({ data: this.pdfData }).promise;
      this.renderPage(pdf, this.pagenum);
    },
    nextStep() {
      if (this.currentStep < this.steps.length - 1) {
        this.currentStep++;
      }
    },
    prevStep() {
      if (this.currentStep > 0) {
        this.currentStep--;
      }
    },
    addRow() {
      this.signataires.push({ prenom: "", nom: "", email: "", mobile: "" });
    },
    removeRow(index) {
      this.signataires.splice(index, 1);
    },
  },
 
};
</script>

<style scoped>
.stepper-container {
  text-align: center;
  padding: 20px;
}
.buttons {
  margin-top: 20px;
}
button {
  margin: 5px;
  padding: 10px;
  cursor: pointer;
}
</style>
