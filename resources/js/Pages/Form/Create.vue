<script setup>
import AppLayout from "@/Layouts/AppLayout.vue";
import Card from "@/Components/Card.vue";
import AForm from "@/Components/AForm.vue";
import Field from  "@/Components/Field.vue";
import { useForm } from "@inertiajs/inertia-vue3";

const form = useForm({
    name: "",
    description: "",
});
</script>

<template>
    <AppLayout title="Create Form">
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                Create Form
            </h2>
        </template>
        <div class="py-12">
            <Card class="max-w-4xl mx-auto p-4">
                <AForm action="/forms/create" method="POST">
                    <Field :type="'text'" :name="'name'" :label="'Form Name'"></Field>
                </AForm>
            </Card>
        </div>
    </AppLayout>
</template>
