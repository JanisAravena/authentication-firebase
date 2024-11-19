<template>
  <div class="home-container">
    <div class="home-card">
      <h1 class="home-title">BIENVENIDO</h1>
      <p class="home-description">Vista privada solo accesible para usuarios autenticados</p>
      <div class="gif-button-container">
        <img
          class="home-gif"
          src="https://i.pinimg.com/originals/83/2e/28/832e2854fd594fea804d4f82802bc5dc.gif"
          alt="Animated GIF"
        />
        <button class="logout-button" @click="goToLogin">Salir</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    goToLogin() {
      this.$router.push('/login');
    }
  }
}
</script>

<style scoped>
.home-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(135deg, #ff758c, #ff7eb3, #ffd46f);
  background-size: 400% 400%;
  animation: gradientAnimation 8s ease infinite;
  font-family: "Arial", sans-serif;
  margin: 0;
  padding: 0;
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

.home-card {
  background: white;
  border-radius: 15px;
  padding: 40px;
  width: 400px;
  text-align: center;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
}

.home-title {
  font-size: 32px;
  font-weight: bold;
  color: #333;
  margin-bottom: 20px;
}

.home-description {
  font-size: 18px;
  color: #666;
  line-height: 1.6;
  margin-bottom: 20px;
}

.gif-button-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px; 
  margin-top: 20px;
}

.home-gif {
  width: 100%;
  max-width: 300px; 
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}

.logout-button {
  padding: 10px 20px;
  font-size: 16px;
  color: white;
  background-color: #ff758c;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.logout-button:hover {
  background-color: #ff7eb3;
}
</style>
