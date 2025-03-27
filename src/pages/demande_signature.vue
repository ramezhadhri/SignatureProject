<template>
  <div class="">
    <!-- <h1 class="text-center text-5xl font-bold my-8">Demandez une signature</h1> -->
    <div class="">
      <div v-if="currentStep === 0">
        <div class="flex flex-col justify-center">
          <div class="w-full my-8">
            <ul class="relative flex flex-col md:flex-row gap-2 my-4 mx-8">
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
            </ul>
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
                  accept="application/pdf"
                  @change="handlepdf"
                  class="block w-full text-sm text-gray-500 file:me-4 file:rounded-xl file:py-2 file:border-1 file:text-sm file:font-semibold file:bg-blue-600 file:text-white hover:file:bg-blue-700 file:disabled:opacity-50 file:disabled:pointer-events-none"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-if="currentStep === 1">
        <div class="flex flex-col justify-center">
          <div class="w-full my-8">
            <ul class="relative flex flex-col md:flex-row gap-2 my-4 mx-8">
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
            </ul>
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
                      <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">
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
            </div>
          </div>
        </div>
      </div>
      <div v-if="currentStep === 2">
        <div class="flex flex-col justify-center">
          <div class="w-full my-8">
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
          </div>
          <div class="block">
            <!-- <div class="my-8">
              <h1 class="text-center text-2xl font-bold">
                Positionnez les signatures
              </h1>
            </div> -->
            <div class="relative w-full flex flex-col">
              <pdfview
                :signataires="signataires"
                :base64pdf="base64pdf"
                @signature-positions="handleSignaturePositions"
              />
              <div class="flex items-center justify-end">
                <div
                  class="flex items-center justify-end w-1/3 bg-gray-100 border border-2 rounded-lg"
                >
                  <label for="confirmation" class="mx-2"
                    >Je confirme que les informations sont correctes.</label
                  >
                  <input
                    type="checkbox"
                    id="confirmation"
                    class="mx-4 shrink-0 mt-0.5 border border-black rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                    v-model="confirmation"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-if="currentStep === 3">
        <div class="flex flex-col justify-center">
          <div class="w-full my-8">
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
          </div>
          <div class="block">
            <div class="mx-8">
              <h1 class="text-center text-2xl font-bold">
                Demandez une signature
              </h1>
            </div>
            <div class="mx-8 my-4 flex flex-col justify-center items-center">
              <div class="border rounded-lg overflow-hidden">
                <table class="min-w-full divide-y divide-gray-200">
                  <thead class="bg-[#3498DB]">
                    <tr>
                      <th
                        class="px-6 py-3 text-start text-xs font-medium text-gray-100 uppercase"
                      >
                        Document
                      </th>
                      <th
                        class="px-6 py-3 text-start text-xs font-medium text-gray-100 uppercase"
                      >
                        Nom signataire
                      </th>
                      <th
                        class="px-6 py-3 text-start text-xs font-medium text-gray-100 uppercase"
                      >
                        Prenom signataire
                      </th>
                      <th
                        class="px-6 py-3 text-start text-xs font-medium text-gray-100 uppercase"
                      >
                        Email Signataire
                      </th>
                    </tr>
                  </thead>
                  <tbody class="divide-y divide-gray-200">
                    <tr v-for="(row, index) in signataires" :key="index">
                      <td
                        class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800"
                      >
                        {{ fileName }}
                      </td>
                      <td
                        class="px-6 py-4 whitespace-nowrap text-sm text-gray-800"
                      >
                        {{ row.nom }}
                      </td>
                      <td
                        class="px-6 py-4 whitespace-nowrap text-sm text-gray-800"
                      >
                        {{ row.prenom }}
                      </td>
                      <td
                        class="px-6 py-4 whitespace-nowrap text-sm font-medium"
                      >
                        {{ row.email }}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <h1 class="font-bold my-2 text-lg">
                choisir le type de signature:
              </h1>
              <select
                v-model="signaturetype"
                class="py-3 px-4 pe-9 block w-1/2 mx-auto bg-gray-100 border-transparent rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
              >
                <option value="" disabled selected>
                  Choisir le type de signature
                </option>
                <option value="Simple">Signature Simple</option>
                <option value="Digigo">Signature DigiGo</option>
              </select>
              <button
                @click="goToSuiviDocument"
                :disabled="!signaturetype"
                class="py-3 px-4 my-8 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-[#2563eb] text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
              >
                envoyer
              </button>
              <!-- <pre>{{ signatures }}</pre> -->
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="flex justify-between mx-8 my-4">
      <button
        class="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
        @click="prevStep"
        :disabled="isprevStepDisabled"
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
        :disabled="isNextStepDisabled"
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
import pdfview from "../components/pdfview.vue";
import * as pdfjsLib from "pdfjs-dist/legacy/build/pdf";
import pdfWorker from "pdfjs-dist/legacy/build/pdf.worker?url";
import Pdfview from "../components/pdfview.vue";
pdfjsLib.GlobalWorkerOptions.workerSrc = pdfWorker;
import { useRouter } from "vue-router";

import logoImage from "../assets/Capture_d_écran_2025-03-04_234513-removebg-preview.png";

import { PDFDocument, rgb, scale, StandardFonts } from "pdf-lib";
import { saveAs } from "file-saver";

export default {
  name: "DemandeSignature",
  components: {
    pdfview,
  },
  data() {
    return {
      
      currentStep: 0,
      signaturetype: "",
      fileName: "",
      base64pdf: "",
      signataires: [{ prenom: "", nom: "", email: "", mobile: "" }],
      
      signatures: [],
      confirmation: false,
      positions: [{ pageNumber: 0, x: 57.59, y: 291.37 }],
      imageBase64:
        "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",
    };
  },
  computed: {
    
    isprevStepDisabled() {
      if (this.currentStep === 0) {
        return true;
      } else if (this.currentStep === 3) {
        return true;
      } else {
        return false;
      }
    },
    isNextStepDisabled() {
      if (this.currentStep === 0) {
        return !this.base64pdf;
      } else if (this.currentStep === 1) {
        return !this.isSignatairesValid;
      } else if (this.currentStep === 2) {
        return this.signatures.length === 0 || !this.confirmation;
      } else if (this.currentStep === 3) {
        return true;
      } else {
        return false;
      }
    },
    isSignatairesValid() {
      return this.signataires.every(
        (signataire) => signataire.prenom && signataire.nom && signataire.email
      );
    },
  },

  methods: {
  
    async addImageToPdf() {
      try {
        console.log("add image here" + this.base64pdf);
        const pdfBlob = await fetch(
          `data:application/pdf;base64,${this.base64pdf}`
        ).then((res) => res.blob());
        console.log("pdfblob ramez" + pdfBlob.arrayBuffer());
        const pdfBytes = new Uint8Array(await pdfBlob.arrayBuffer());
        //.log("pdfbytes Ramez"+pdfBytes);
        //const pdfbin = atob(this.pdfBase64);
        //const pdfBytes = new Uint8Array(pdfbin.length);
        const pdfDoc = await PDFDocument.load(pdfBytes); //pdf document utilise seulement un tableau d'octets

        console.log("PDF chargé avec succès.");

        const imageBlob = await fetch(
          `data:image/png;base64,${this.imageBase64}`
        ).then((res) => res.blob());
        const imageBytes = new Uint8Array(await imageBlob.arrayBuffer());
        const img = await pdfDoc.embedPng(imageBytes);
        const imageByttes = await fetch(logoImage).then((res) =>
          res.arrayBuffer()
        );
        const image = await pdfDoc.embedPng(imageByttes);

        const font = await pdfDoc.embedFont(StandardFonts.Helvetica);

        const pages = pdfDoc.getPages();

        for (const signer of this.signatures) {
          for (const pos of signer.positions) {
            const page = pages[pos.pageNumber - 1];
            const { width, height } = page.getSize();

            const imgWidth = width / 8;
            const imgHeight = height / 10;

            const positionX = pos.x - 20 + (imgWidth + 100) / 2;
            const positionY = pos.y;
            page.drawImage(image, {
              x: pos.x / 0.75,
              y: pos.y / 0.75,
              width: imgWidth + 20,
              height: imgHeight,
            });
            page.drawImage(img, {
              x: positionX / 0.75,
              y: positionY / 0.75,
              width: imgWidth,
              height: imgHeight,
            });
            this.date = new Date();
            const day = this.date.getDate();
            const mounth = this.date.getMonth() + 1;
            const year = this.date.getFullYear();

            page.drawText(` Ramez Hadhri le ${day}-${mounth}-${year}  `, {
              x: pos.x / 0.75,
              y: (pos.y + imgHeight - 20) / 0.75,
              size: 12,
              font,
              color: rgb(0, 0, 0),
            });

            console.log("Image et texte ajoutés avec succès.");
          }
        }

        const modifiedPdfBytes = await pdfDoc.save();
        const blob = new Blob([modifiedPdfBytes], { type: "application/pdf" });
        saveAs(blob, `${this.fileName}-signé.pdf`);
        console.log("PDF téléchargé avec succès.");
      } catch (error) {
        console.error("Erreur lors de la modification du PDF :", error.message);
      }
    },
    goToSuiviDocument() {
     
        console.log("base64pdf:" + this.base64pdf);
        this.addImageToPdf();
      
      this.$router.push("/home");
    },
    handleSignaturePositions(positions) {
      this.signatures = positions;
      console.log("Received Signature Positions:", positions);
    },
    async handlepdf(events) {
      const file = events.target.files[0];

      if (file && file.type === "application/pdf") {
        const reader = new FileReader();
        this.fileName = file.name;
        reader.onload = async (e) => {
          this.base64pdf = e.target.result.split(",")[1];

          console.log(this.base64pdf);
        };

        reader.readAsDataURL(file); // retourne application/pdf;base64,base64string
      } else {
        console.error("Type document pas valide ");
      }
    },

    nextStep() {
      if (this.currentStep < 3) {
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
