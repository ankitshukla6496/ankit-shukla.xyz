"use server";

export interface ContactFormState {
  success: boolean;
  error: string | null;
}

export async function sendContactMessage(
  _prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;

  if (!name || !email || !message) {
    return { success: false, error: "All fields are required." };
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { success: false, error: "Please enter a valid email address." };
  }

  // Log the message for now — replace with Resend or another email service later
  console.log("Contact form submission:", { name, email, message });

  return { success: true, error: null };
}
