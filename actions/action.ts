export async function LoginUser(email: string, name: string) {
  try {
    await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, name }),
    });

    return { success: true };
  } catch (error) {
    return { success: false, error };
  }
}
