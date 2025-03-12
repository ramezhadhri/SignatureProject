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
                  <thead class="bg-neutral-700">
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
    goToSuiviDocument() {
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
