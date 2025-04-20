let loginForm = document.querySelector(".my-form");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let username = document.getElementById("username");
  let password = document.getElementById("password");

  // Kontrol edilen kullanıcı adı ve şifre
  let validUsername = "admin";
  let validPassword = "admin123";

  // Girilen değerlerin kontrolü
  if (username.value === validUsername && password.value === validPassword) {
    console.log("Giriş başarılı!");
    // Buraya giriş başarılı olduğunda yapılacak işlemleri ekleyebilirsiniz
    // Örnek olarak bir link açabiliriz
    window.location.href = "adminpanel.html";
  } else {
    console.log("Hatalı kullanıcı adı veya şifre!");
    // Buraya hatalı giriş durumunda kullanıcıya bir hata mesajı göstermek için kod ekleyebilirsiniz
    alert("Kullanıcı adı veya şifre yanlış!");
  }
});
