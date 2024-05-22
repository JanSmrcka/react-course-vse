"use server";
import db from "@/utils/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const createTodo = async (formData: FormData) => {
  const newTodo = formData.get("todo")?.toString();

  if (newTodo) {
    await db.todo.create({
      data: {
        title: newTodo,
      },
    });
    revalidatePath("/todos");
  }
};

export const toggleTodo = async (id: string) => {
  const todo = await db.todo.findUnique({
    where: {
      id,
    },
  });
  if (!todo) return;
  await db.todo.update({
    where: {
      id,
    },
    data: {
      done: !todo.done,
    },
  });
  revalidatePath("/todos");
};

export const deleteTodo = async (id: string) => {
  await db.todo.delete({
    where: {
      id,
    },
  });
  revalidatePath("/todos");
};

export const redirectSearchParams = async (formData) => {
  const search = formData.get("search")?.toString();

  if (search) {
    redirect(`/search?search=${search}`);
  } else {
    redirect("/search");
  }
};

export const getTodos = async (todoName?: string | null) => {
  //await new Promise(resolve => setTimeout(() => resolve(''), 2000))
  const todos = await db.todo.findMany({
    where: {
      title: {
        contains: todoName || "",
      },
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return todos;
};
