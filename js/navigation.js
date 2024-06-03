$(document).ready(function () {
  $("#home-link, #onboarding-link").on("click", function () {
    $("#main-content > div").addClass("d-none");
    $("#onboarding-screen").removeClass("d-none");
    $("#onboarding-chart").removeClass("d-none");
  });
  $("#positions-link").on("click", function () {
    $("#main-content > div").addClass("d-none");
    $("#positions-screen").removeClass("d-none");
  });
  $("#add-position-button").on("click", function () {
    $("#main-content > div").addClass("d-none");
    $("#new-position-screen").removeClass("d-none");
  });
  $("#add-onboardeee-button").on("click", function () {
    $("#main-content > div").addClass("d-none");
    $("#new-onboardee-screen").removeClass("d-none");
  });
  $("#stages-link").on("click", function () {
    $("#main-content > div").addClass("d-none");
    $("#stages-screen").removeClass("d-none");
  });
  $("#onboarding-form-screen").on("click", function () {
    $("#main-content > div").addClass("d-none");
    $("#stages-screen").removeClass("d-none");
  });
  $("#preboard-section-link").on("click", function () {
    $("#onboarding-screen > div").addClass("d-none");
    $("#preboard-section").removeClass("d-none");
    $("#preboard-section-link").addClass("active");
    $("#onboard-section-link").removeClass("active");
    $("#adoption-section-link").removeClass("active");
  });
  $("#onboard-section-link").on("click", function () {
    $("#onboarding-screen > div").addClass("d-none");
    $("#onboard-section").removeClass("d-none");
    $("#preboard-section-link").removeClass("active");
    $("#onboard-section-link").addClass("active");
    $("#adoption-section-link").removeClass("active");
  });
  $("#adoption-section-link").on("click", function () {
    $("#onboarding-screen > div").addClass("d-none");
    $("#adoption-section").removeClass("d-none");
    $("#preboard-section-link").removeClass("active");
    $("#onboard-section-link").removeClass("active");
    $("#adoption-section-link").addClass("active");
  });

  $("#preboard-table tbody tr").on("click", function () {
    // Acción a realizar al hacer clic en una fila
    $("#main-content > div").addClass("d-none");
    $("#progress-screen").removeClass("d-none");
    console.log("Haz clic en la fila:", $(this).index());
  });

  $("#positions-table tbody tr td a.btn").on("click", function () {
    // Acción a realizar al hacer clic en una fila
    $("#main-content > div").addClass("d-none");
    $("#edit-position-screen").removeClass("d-none");
    console.log("Haz clic en la fila:", $(this).index());
  });
});
