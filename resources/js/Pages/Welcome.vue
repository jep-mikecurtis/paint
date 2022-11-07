<script setup>
import { Head, Link } from '@inertiajs/inertia-vue3'
</script>

<template>
    <div>
        <main>
            <div
                class="relative pt-16 pb-32 flex content-center items-center justify-center"
                style="min-height: 75vh"
            >
                <div
                    class="absolute top-0 w-full h-full bg-center bg-cover"
                    style="
                        background-image: url('https://images.unsplash.com/photo-1613844044163-1ad2f2d0b152?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80');
                    "
                >
                    <span
                        id="blackOverlay"
                        class="w-full h-full absolute opacity-75 bg-black"
                    ></span>
                </div>
                <div class="container relative mx-auto">
                    <div class="items-center flex flex-wrap">
                        <div
                            class="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center"
                        >
                            <div class="lg:pr-12">
                                <h1 class="text-white font-semibold text-5xl">
                                    Curtis & Sons
                                </h1>
                                <h1 class="text-white font-semibold text-4xl">
                                    Paint Co
                                </h1>
                                <p class="text-lg text-gray-300">
                                    Quality painting at a fair price!
                                </p>
                                <div class="mt-4">

                                    <Link class="bg-blue-700 text-white text-2xl py-1 px-10 rounded shadow" :href="'/paint/bid'">
                                       Get A Quote
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    class="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
                    style="height: 70px"
                >
                    <svg
                        class="absolute bottom-0 overflow-hidden"
                        xmlns="http://www.w3.org/2000/svg"
                        preserveAspectRatio="none"
                        version="1.1"
                        viewBox="0 0 2560 100"
                        x="0"
                        y="0"
                    >
                        <polygon
                            class="text-gray-300 fill-current"
                            points="2560 0 2560 100 0 100"
                        ></polygon>
                    </svg>
                </div>
            </div>
            <section class="pb-20 bg-gray-300 -mt-24">
                <div class="container mx-auto px-4">
                    <div class="flex flex-wrap">
                        <div
                            class="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center"
                        >
                            <div
                                class="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg"
                            >
                                <div class="px-4 py-5 flex-auto">
                                    <div
                                        class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400"
                                    >
                                        <i class="fas fa-award"></i>
                                    </div>
                                    <h6 class="text-xl font-semibold">
                                        High Quality Paint
                                    </h6>
                                    <p class="mt-2 mb-4 text-gray-600">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Est quasi dolor maxime odit minus unde voluptatibus magni.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="w-full md:w-4/12 px-4 text-center">
                            <div
                                class="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg"
                            >
                                <div class="px-4 py-5 flex-auto">
                                    <div
                                        class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-blue-400"
                                    >
                                        <i class="fas fa-retweet"></i>
                                    </div>
                                    <h6 class="text-xl font-semibold">
                                        Free Estimates
                                    </h6>
                                    <p class="mt-2 mb-4 text-gray-600">
                                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem consequatur excepturi iure autem doloribus voluptatibus voluptate sapiente.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="pt-6 w-full md:w-4/12 px-4 text-center">
                            <div
                                class="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg"
                            >
                                <div class="px-4 py-5 flex-auto">
                                    <div
                                        class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-green-400"
                                    >
                                        <i class="fas fa-fingerprint"></i>
                                    </div>
                                    <h6 class="text-xl font-semibold">
                                        Verified Company
                                    </h6>
                                    <p class="mt-2 mb-4 text-gray-600">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi voluptatem quod quia unde debitis vero quisquam consequuntur?
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="flex flex-wrap items-center mt-32">
                        <div class="w-full md:w-5/12 px-4 mr-auto ml-auto">
                            <div
                                class="text-gray-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-gray-100"
                            >
                                <i class="fas fa-user-friends text-xl"></i>
                            </div>
                            <h3
                                class="text-3xl mb-2 font-semibold leading-normal"
                            >
                                Working with us is a pleasure
                            </h3>
                            <p
                                class="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700"
                            >
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque molestias quae sequi doloribus voluptatum dolorem corrupti voluptates id illum labore!
                            </p>
                            <p
                                class="text-lg font-light leading-relaxed mt-0 mb-4 text-gray-700"
                            >
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus placeat doloremque perferendis commodi, deleniti quibusdam veritatis eligendi officia suscipit nesciunt magnam quia enim similique voluptate nam ipsa saepe rerum! Veritatis optio itaque, accusantium, culpa vero nemo voluptates autem explicabo velit, aliquid consequuntur impedit illo accusamus nobis. Nulla asperiores quas earum?
                            </p>
                        </div>
                        <div class="w-full md:w-4/12 px-4 mr-auto ml-auto">
                            <div
                                class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-pink-600"
                            >
                                <img
                                    alt="..."
                                    src="https://images.unsplash.com/photo-1516962080544-eac695c93791?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                                    class="w-full align-middle rounded-t-lg"
                                />
                                <blockquote class="relative p-8 mb-4">
                                    <svg
                                        preserveAspectRatio="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 583 95"
                                        class="absolute left-0 w-full block"
                                        style="height: 95px; top: -94px"
                                    >
                                        <polygon
                                            points="-30,95 583,95 583,65"
                                            class="text-pink-600 fill-current"
                                        ></polygon>
                                    </svg>
                                    <h4 class="text-xl font-bold text-white">
                                        Top Notch Services
                                    </h4>
                                    <p
                                        class="text-md font-light mt-2 text-white"
                                    >
                                        The Arctic Ocean freezes every winter
                                        and much of the sea-ice then thaws every
                                        summer, and that process will continue
                                        whatever happens.
                                    </p>
                                </blockquote>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </main>
    </div>
</template>
