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
  $("#add-tasks-button").on("click", function () {
    $("#main-content > div").addClass("d-none");
    $("#new-task-screen").removeClass("d-none");
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

    // Obtener la fila correspondiente al botón de edición clicado
    var row = $(this).closest("tr");

    // Obtener los elementos de la fila
    var name = row.find("td:eq(0)").text(); // Nombre
    var description = row.find("td:eq(1)").text(); // Descripción
    // var stages = row.find("td:eq(2)").text().trim().split(","); // Etapas (como una lista)
    var threshold = row.find("td:eq(3)").text(); // Umbral de días de incorporación

    // Mostrar la información en la consola (solo para propósitos de demostración)
    console.log("Nombre:", name);
    console.log("Descripción:", description);
    // console.log("Etapas:", stages);
    console.log("Umbral de días de incorporación:", threshold);

    // Insertar los valores en los campos de texto como placeholders
    $("#edit-name").attr("placeholder", name);
    $("#edit-description").attr("placeholder", description);
    $("#edit-threshold").attr("placeholder", threshold);
  });

  $("#tasks-table tbody").on("click", "tr td a.btn", function () {
    // Acción a realizar al hacer clic en una fila
    $("#main-content > div").addClass("d-none");
    $("#edit-tasks-screen").removeClass("d-none");
    console.log("Haz clic en la fila:", $(this).index());

    // Obtener la fila correspondiente al botón de edición clicado
    var row = $(this).closest("tr");

    // Obtener los elementos de la fila
    var name = row.find("td:eq(0)").text(); // Nombre
    var description = row.find("td:eq(1)").text(); // Descripción
    // var stages = row.find("td:eq(2)").text().trim().split(","); // Etapas (como una lista)
    var hyperlink = row.find("td:eq(2)").text(); // Hyperlink

    // Mostrar la información en la consola (solo para propósitos de demostración)
    console.log("Nombre:", name);
    console.log("Descripción:", description);
    // console.log("Etapas:", stages);
    console.log("Hyperlink:", hyperlink);

    // Insertar los valores en los campos de texto como placeholders
    $("#edit-name-task").attr("placeholder", name);
    $("#edit-description-task").attr("placeholder", description);
    $("#edit-hyperlink-task").attr("placeholder", hyperlink);
  });

  const tasksData = {
    Developer: {
      PreBoard: [
        {
          name: "Account",
          description: "Create account",
          hyperlink: "http://example.com/task1",
        },
        {
          name: "Hardware request",
          description: "Make a Hardware Request",
          hyperlink: "http://example.com/task2",
        },
      ],
      Onboard: [
        {
          name: "Cube",
          description:
            "TasEstablish the position in which the employee is to be installedk 3 Description",
          hyperlink: "http://example.com/task1",
        },
        {
          name: "Name Tag",
          description: "Assign the Name Tag",
          hyperlink: "http://example.com/task2",
        },
        {
          name: "Welcome activity",
          description: "Perform the welcome activity",
          hyperlink: "http://example.com/task3",
        },
      ],
      Adoption: [
        {
          name: "Activities Assignation",
          description: "Perform assignment activities",
          hyperlink: "http://example.com/task1",
        },
      ],
    },
    Analyst: {
      PreBoard: [
        {
          name: "Task 5",
          description: "Task 5 Description",
          hyperlink: "http://example.com/task5",
        },
      ],
      Onboard: [],
      Adoption: [],
    },
    Manager: {
      PreBoard: [],
      Onboard: [],
      Adoption: [],
    },
  };

  $("#positions-table tbody").on(
    "click",
    "tr td a.stages-link",
    function (event) {
      event.preventDefault(); // Prevenir el comportamiento predeterminado del enlace

      // Obtener el stage seleccionado (texto del enlace)
      var stage = $(this).text().replace(",", ""); // Remover la coma si está presente

      // Obtener la fila correspondiente al enlace clicado
      var row = $(this).closest("tr");

      // Obtener los elementos de la fila
      var name = row.find("td:eq(0)").text(); // Nombre
      var description = row.find("td:eq(1)").text(); // Descripción
      var threshold = row.find("td:eq(3)").text(); // Umbral de días de incorporación

      // Mostrar la pantalla de tareas del stage seleccionado
      $("#main-content > div").addClass("d-none");
      $("#stages-screen").removeClass("d-none");

      // Llenar los elementos de la pantalla de tareas del stage con la información obtenida
      $("#stage-name").text(name);
      $("#stage-description").text(description);
      $("#stage-threshold").text(threshold);
      $("#stage-selected").text(stage);

      // Cambiar el contenido del h2 en la pantalla de stages
      document.getElementById("title-stage").innerText = `${name} ${stage}`;

      // Limpiar la tabla de tareas
      $("#tasks-table tbody").empty();

      // Obtener las tareas correspondientes a la posición y stage seleccionados
      var tasks = tasksData[name] ? tasksData[name][stage] : [];

      // Llenar la tabla de tareas con los datos hardcodeados
      tasks.forEach(function (task) {
        var rowHtml = `<tr>
            <td>${task.name}</td>
            <td>${task.description}</td>
            <td><a href="${task.hyperlink}" target="_blank">${task.hyperlink}</a></td>
            <td class="text-center">
              <a href="#" class="btn"><i class="bi bi-pencil"></i></a>
            </td>
        </tr>`;
        $("#tasks-table tbody").append(rowHtml);
      });

      console.log("Stage seleccionado:", stage);
      console.log("Nombre:", name);
      console.log("Descripción:", description);
      console.log("Umbral de días de incorporación:", threshold);
    }
  );
});
