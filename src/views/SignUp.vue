<template>
  <div class="login-container">
    <div class="login-card">
      <h1 class="login-title">Registro</h1>
      <form class="login-form" @submit.prevent="signUp">
        <div class="input-group">
          <input
            v-model="email"
            type="email"
            placeholder="Correo electrónico"
            required
          />
        </div>
        <div class="input-group">
          <input
            v-model="password"
            type="password"
            placeholder="Contraseña"
            required
          />
        </div>
        <button class="login-button" type="submit">Registrarse</button>
      </form>
      <p class="login-footer">
        ¿Ya tiene una cuenta? 
        <a class="create-account" @click.prevent="goToLogin" href="#">
          Iniciar sesión →
        </a>
      </p>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { auth } from "../firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import Swal from "sweetalert2";

export default {
  setup() {
    const email = ref("");
    const password = ref("");
    const router = useRouter();

    const signUp = async () => {
      try {
        await createUserWithEmailAndPassword(auth, email.value, password.value);
        Swal.fire({
          icon: "success",
          title: "¡Usuario registrado con éxito!",
          showConfirmButton: false,
          timer: 1500,
        });
        router.push("/home");
      } catch (error) {
        console.error(error);
        if (error.code === "auth/email-already-in-use") {
          Swal.fire({
            icon: "error",
            title: "Error",
            text: "La dirección de correo electrónico ya está en uso.",
          });
        } else {
          Swal.fire({
            icon: "error",
            title: "Error",
            text: "Error al registrar el usuario: " + error.message,
          });
        }
      }
    };

    const goToLogin = () => {
      router.push("/login");
    };

    return { email, password, signUp, goToLogin };
  },
};
</script>

<style scoped>
html,
body {
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
  overflow: hidden;
}

.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; 
  width: 100vw; 
  background: linear-gradient(135deg, #ff758c, #ff7eb3, #ffd46f);
  background-size: 400% 400%;
  animation: gradientAnimation 8s ease infinite;
  font-family: "Arial", sans-serif;
}

@keyframes gradientAnimation {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.login-card {
  background: white;
  border-radius: 15px;
  padding: 40px;
  width: 400px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  text-align: center;
}

.login-title {
  font-size: 28px;
  font-weight: bold;
  color: #333;
  margin-bottom: 20px;
}

.input-group {
  margin-bottom: 20px;
}

.input-group input {
  width: 100%;
  padding: 12px 15px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-sizing: border-box;
  transition: border-color 0.3s;
}

.input-group input:focus {
  border-color: #ff758c;
  outline: none;
}

.login-button {
  width: 100%;
  padding: 12px;
  font-size: 16px;
  font-weight: bold;
  color: white;
  background: linear-gradient(135deg, #ff758c, #ff7eb3, #ffd46f);
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.3s;
}

.login-button:hover {
  background: linear-gradient(135deg, #ff7eb3, #ffd46f, #ff758c);
}

.login-footer {
  margin-top: 15px;
  font-size: 14px;
  color: #666;
}

.create-account {
  color: #ff758c;
  text-decoration: none;
  cursor: pointer;
}

.create-account:hover {
  text-decoration: underline;
}
</style>
