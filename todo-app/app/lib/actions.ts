'use server'

import { revalidatePath } from "next/cache";
import axios from 'axios';

// const baseUrl = 'http://localhost:8080/todos'; // local url
const baseUrl = 'https://next-todo-app-backend.vercel.app/todos'; // production url

export async function getPosts() {
    const response = await axios.get(baseUrl);
    return response.data;
}

export async function createPost(formData: FormData) {
    const title = formData.get('title');
    if (!title || title === '') {
        return;
    }
    await axios.post(baseUrl, {
        title: formData.get('title')
    });
    revalidatePath('/');
}

export async function deletePost(formData: FormData) {
    const id = formData.get('id');
    await axios.delete(`${baseUrl}/${id}`);
    revalidatePath('/');
}

export async function editPost(formData: FormData) {
    const id = formData.get('id');
    const title = formData.get('title');
    if (!title || title === '') {
        return;
    }
    await axios.put(`${baseUrl}/${id}`, {
        title: formData.get('title')
    });
    revalidatePath('/');
}

export async function completePost(formData: FormData) {
    const id = formData.get('id');
    const title = formData.get('title');
    if (!title || title === '') {
        return;
    }
    await axios.put(`${baseUrl}/${id}`, {
        title: formData.get('title'),
        completed: true,
    });
    revalidatePath('/');
}