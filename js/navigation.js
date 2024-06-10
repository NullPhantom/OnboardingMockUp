$(document).ready(function () {
  $("#preboard-table td").addClass("truncate-text");
  $("#preboard-table th").addClass("truncate-text");

  $("#home-link, #onboarding-link").on("click", function () {
    $("#main-content > div").addClass("d-none");
    $("#onboarding-screen").removeClass("d-none");
    $("#onboarding-chart").removeClass("d-none");
  });
  $("#positions-link").on("click", function () {
    $("#main-content > div").addClass("d-none");
    $("#positions-screen").removeClass("d-none");
  });
  $("#tools-link").on("click", function () {
    $("#main-content > div").addClass("d-none");
    $("#tools-screen").removeClass("d-none");
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

  $("#preboard-table tbody tr td:not(.cell_dropdown)").on("click", function () {
    //Obtener la fila correspondiente
    var row = $(this).closest("tr");

    //Obtener los elementos de la fila
    var name = row.find("td:eq(0)").text(); //Nombre
    var type = row.find("td:eq(1)").text(); //Type
    var stage = row.find("td:eq(2)").text(); //Stage
    var ignitionID = row.find("td:eq(3)").text(); //IgnitionID
    var position = row.find("td:eq(4)").text(); //Position
    var area = row.find("td:eq(5)").text(); //Area
    var email = row.find("td:eq(6)").text(); //Email
    var onboardEndDate = row.find("td:eq(7)").text(); //Onboard end date
    var costCenter = row.find("td:eq(8)").text(); //Cost center
    var startingDate = row.find("td:eq(9)").text(); //Starting Date
    var manager = row.find("td:eq(10)").text(); //Manager
    var supervisor = row.find("td:eq(11)").text(); //Supervisor
    var assignee = row.find("td:eq(12)").text(); //Assignee
    var notes = row.find("td:eq(13)").text(); // Notes

    console.log("Name of the employee: ", name);
    console.log("Type: ", type);
    console.log("Stage: ", stage);
    console.log("Ignition ID: ", ignitionID);
    console.log("Position: ", position);
    console.log("Area: ", area);
    console.log("Email: ", email);
    console.log("Onboard end date: ", onboardEndDate);
    console.log("Cost center: ", costCenter);
    console.log("Starting date: ", startingDate);
    console.log("Manager: ", manager);
    console.log("Supervisor: ", supervisor);
    console.log("Assignee: ", assignee);
    console.log("Notes: ", notes);

    // Acción a realizar al hacer clic en una fila
    $("#main-content > div").addClass("d-none");
    $("#progress-screen").removeClass("d-none");
    console.log("Haz clic en la fila:", $(this).index());

    $("#employee-name").text(name);

    $("#type-employee").html(
      "<small><strong>Type:</strong> " + type + "</small>"
    );
    $("#ignition-employee").html(
      "<small><strong>IgnitionID:</strong> " + ignitionID + "</small>"
    );
    $("#position-employee").html(
      "<small><strong>Position:</strong> " + position + "</small>"
    );
    $("#area-employee").html(
      "<small><strong>Area:</strong> " + area + "</small>"
    );
    $("#email-employee").html(
      "<small><strong>Email:</strong> " + email + "</small>"
    );
    $("#enddate-employee").html(
      "<small><strong>End date:</strong> " + onboardEndDate + "</small>"
    );
    $("#costcenter-employee").html(
      "<small><strong>Cost center:</strong> " + costCenter + "</small>"
    );
    $("#startingdate-employee").html(
      "<small><strong>Starting date:</strong> " + startingDate + "</small>"
    );
    $("#manager-employee").html(
      "<small><strong>Manager:</strong> " + manager + "</small>"
    );
    $("#supervisor-employee").html(
      "<small><strong>Supervisor:</strong> " + supervisor + "</small>"
    );
    $("#assignee-employee").html(
      "<small><strong>Assignee:</strong> " + assignee + "</small>"
    );
    $("#notes-employee").html(
      "<small><strong>Notes:</strong> " + notes + "</small>"
    );
  });

  $("#preboard-table td").hover(function () {
    var $this = $(this);
    if ($this[0].offsetWidth < $this[0].scrollWidth) {
      $this.attr(
        "title",
        $this.text()
      ); /* Agrega el texto completo como atributo 'title' */
    } else {
      $this.removeAttr(
        "title"
      ); /* Elimina el atributo 'title' si el texto cabe en la celda */
    }
  });

  $("#preboard-table th").hover(function () {
    var $this = $(this);
    if ($this[0].offsetWidth < $this[0].scrollWidth) {
      $this.attr(
        "title",
        $this.text()
      ); /* Agrega el texto completo como atributo 'title' */
    } else {
      $this.removeAttr(
        "title"
      ); /* Elimina el atributo 'title' si el texto cabe en la celda */
    }
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
    var salaryGrade = row.find("td:eq(3)").text(); // Umbral de días de incorporación

    // Mostrar la información en la consola (solo para propósitos de demostración)
    console.log("Nombre:", name);
    console.log("Descripción:", description);
    // console.log("Etapas:", stages);
    console.log("Grado del salario:", salaryGrade);

    // Insertar los valores en los campos de texto como placeholders
    $("#edit-name").attr("placeholder", name);
    $("#edit-description").attr("placeholder", description);
    $("#edit-salary-grade").attr("placeholder", salaryGrade);
  });

  // $("#tasks-table tbody").on("click", "tr td a.btn", function () {
  //   // Acción a realizar al hacer clic en una fila
  //   $("#main-content > div").addClass("d-none");
  //   $("#edit-tasks-screen").removeClass("d-none");
  //   console.log("Haz clic en la fila:", $(this).index());

  //   // Obtener la fila correspondiente al botón de edición clicado
  //   var row = $(this).closest("tr");

  //   // Obtener los elementos de la fila
  //   var name = row.find("td:eq(0)").text(); // Nombre
  //   var description = row.find("td:eq(1)").text(); // Descripción
  //   // var stages = row.find("td:eq(2)").text().trim().split(","); // Etapas (como una lista)
  //   var hyperlink = row.find("td:eq(2)").text(); // Hyperlink

  //   // Mostrar la información en la consola (solo para propósitos de demostración)
  //   console.log("Nombre:", name);
  //   console.log("Descripción:", description);
  //   // console.log("Etapas:", stages);
  //   console.log("Hyperlink:", hyperlink);

  //   // Insertar los valores en los campos de texto como placeholders
  //   $("#edit-name-task").attr("placeholder", name);
  //   $("#edit-description-task").attr("placeholder", description);
  //   $("#edit-hyperlink-task").attr("placeholder", hyperlink);
  // });

  // const tasksData = {
  //   Developer: {
  //     PreBoard: [
  //       {
  //         name: "Account",
  //         description: "Create account",
  //         hyperlink: "http://example.com/task1",
  //       },
  //       {
  //         name: "Hardware request",
  //         description: "Make a Hardware Request",
  //         hyperlink: "http://example.com/task2",
  //       },
  //     ],
  //     Onboard: [
  //       {
  //         name: "Cube",
  //         description:
  //           "Establish the position in which the employee is to be installed",
  //         hyperlink: "http://example.com/task1",
  //       },
  //       {
  //         name: "Name Tag",
  //         description: "Assign the Name Tag",
  //         hyperlink: "http://example.com/task2",
  //       },
  //       {
  //         name: "Welcome activity",
  //         description: "Perform the welcome activity",
  //         hyperlink: "http://example.com/task3",
  //       },
  //     ],
  //     Adoption: [
  //       {
  //         name: "Activities Assignation",
  //         description: "Perform assignment activities",
  //         hyperlink: "http://example.com/task1",
  //       },
  //     ],
  //   },
  //   Analyst: {
  //     PreBoard: [
  //       {
  //         name: "Task 5",
  //         description: "Task 5 Description",
  //         hyperlink: "http://example.com/task5",
  //       },
  //     ],
  //     Onboard: [],
  //     Adoption: [],
  //   },
  //   Manager: {
  //     PreBoard: [],
  //     Onboard: [],
  //     Adoption: [],
  //   },
  // };

  // $("#positions-table tbody").on(
  //   "click",
  //   "tr td a.stages-link",
  //   function (event) {
  //     event.preventDefault(); // Prevenir el comportamiento predeterminado del enlace

  //     // Obtener el stage seleccionado (texto del enlace)
  //     var stage = $(this).text().replace(",", ""); // Remover la coma si está presente

  //     // Obtener la fila correspondiente al enlace clicado
  //     var row = $(this).closest("tr");

  //     // Obtener los elementos de la fila
  //     var name = row.find("td:eq(0)").text(); // Nombre
  //     var description = row.find("td:eq(1)").text(); // Descripción
  //     var threshold = row.find("td:eq(3)").text(); // Umbral de días de incorporación

  //     // Mostrar la pantalla de tareas del stage seleccionado
  //     $("#main-content > div").addClass("d-none");
  //     $("#stages-screen").removeClass("d-none");

  //     // Llenar los elementos de la pantalla de tareas del stage con la información obtenida
  //     $("#stage-name").text(name);
  //     $("#stage-description").text(description);
  //     $("#stage-threshold").text(threshold);
  //     $("#stage-selected").text(stage);

  //     // Cambiar el contenido del h2 en la pantalla de stages
  //     document.getElementById("title-stage").innerText = `${name} ${stage}`;

  //     // Limpiar la tabla de tareas
  //     $("#tasks-table tbody").empty();

  //     // Obtener las tareas correspondientes a la posición y stage seleccionados
  //     var tasks = tasksData[name] ? tasksData[name][stage] : [];

  //     // Llenar la tabla de tareas con los datos hardcodeados
  //     tasks.forEach(function (task) {
  //       var rowHtml = `<tr>
  //           <td>${task.name}</td>
  //           <td>${task.description}</td>
  //           <td><a href="${task.hyperlink}" target="_blank">${task.hyperlink}</a></td>
  //           <td class="text-center">
  //             <a href="#" class="btn"><i class="bi bi-pencil"></i></a>
  //           </td>
  //       </tr>`;
  //       $("#tasks-table tbody").append(rowHtml);
  //     });

  //     console.log("Stage seleccionado:", stage);
  //     console.log("Nombre:", name);
  //     console.log("Descripción:", description);
  //     console.log("Umbral de días de incorporación:", threshold);
  //   }
  // );

  // AUTOCOMPLETE INPUT SECTION

  let currentCell; // Variable para almacenar la celda actualmente seleccionada
  let selectedTools = []; // Arreglo para almacenar las herramientas seleccionadas

  $("#positions-table tbody tr td.tools-link").on("click", function () {
    // Mostrar modal para agregar herramientas
    $("#autocompleteModal").modal("show");
    // Almacenar referencia a la celda actual
    currentCell = this;
  });

  function autocomplete(inp, arr) {
    var currentFocus;

    inp.addEventListener("input", function (e) {
      var val = this.value;
      showAutocompleteList(val, arr);
    });

    inp.addEventListener("click", function (e) {
      console.log("click funcion modal");
      var val = this.value;
      showAutocompleteList(val, arr, true);
    });

    inp.addEventListener("keydown", function (e) {
      var x = document.getElementById(this.id + "autocomplete-list");
      if (x) x = x.getElementsByTagName("div");
      if (e.keyCode == 40) {
        currentFocus++;
        addActive(x);
      } else if (e.keyCode == 38) {
        currentFocus--;
        addActive(x);
      } else if (e.keyCode == 13) {
        e.preventDefault();
        if (currentFocus > -1) {
          if (x) x[currentFocus].click();
        }
      }
    });

    function showAutocompleteList(val, arr, showAll = false) {
      var a, b, i;
      closeAllLists();
      currentFocus = -1;
      a = document.createElement("DIV");
      a.setAttribute("id", inp.id + "autocomplete-list");
      a.setAttribute("class", "autocomplete-items");
      inp.parentNode.appendChild(a);

      var count = 0;
      for (i = 0; i < arr.length; i++) {
        if (
          showAll ||
          arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()
        ) {
          if (count < 5) {
            b = document.createElement("DIV");
            b.innerHTML =
              "<strong>" + arr[i].substr(0, val.length) + "</strong>";
            b.innerHTML += arr[i].substr(val.length);
            b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
            b.addEventListener("click", function (e) {
              inp.value = this.getElementsByTagName("input")[0].value;
              closeAllLists();
            });
            a.appendChild(b);
            count++;
          }
        }
      }
    }

    function addActive(x) {
      if (!x) return false;
      removeActive(x);
      if (currentFocus >= x.length) currentFocus = 0;
      if (currentFocus < 0) currentFocus = x.length - 1;
      x[currentFocus].classList.add("autocomplete-active");
    }

    function removeActive(x) {
      for (var i = 0; i < x.length; i++) {
        x[i].classList.remove("autocomplete-active");
      }
    }

    function closeAllLists(elmnt) {
      var x = document.getElementsByClassName("autocomplete-items");
      for (var i = 0; i < x.length; i++) {
        if (elmnt != x[i] && elmnt != inp) {
          x[i].parentNode.removeChild(x[i]);
        }
      }
    }

    document.addEventListener("click", function (e) {
      closeAllLists(e.target);
    });
  }

  var tools = [
    "Request Hardware",
    "Jira access",
    "Sharepoint",
    "Peer programming",
    "Activities assignment",
    "Career path",
    "Account",
    "Cube assignment",
    "Welcome letter",
  ];

  autocomplete(document.getElementById("autocomplete-tool-dropdown"), tools);
  autocomplete(document.getElementById("autocomplete-tool-screen"), tools);

  document
    .getElementById("addToolButton")
    .addEventListener("click", function () {
      var toolInput = document.getElementById("autocomplete-tool-dropdown");
      var tool = toolInput.value;
      if (tool) {
        addToolToList(tool);
        toolInput.value = "";
      }
    });

  document
    .getElementById("acceptButton")
    .addEventListener("click", function () {
      let toolListItems = document.querySelectorAll(
        "#toolList .list-group-item span"
      );
      let toolNames = Array.from(toolListItems).map((item) => item.textContent);
      if (currentCell) {
        let displayTools = toolNames.slice(0, 3); // Tomar solo las primeras 3 herramientas
        if (toolNames.length > 3) {
          displayTools.push("..."); // Agregar puntos suspensivos si hay más de 3 herramientas
        }
        currentCell.innerHTML = displayTools.join(", ");
      }
      $("#autocompleteModal").modal("hide");
    });

  function addToolToList(tool) {
    var toolList = document.getElementById("toolList");
    var listItem = document.createElement("li");
    listItem.classList.add(
      "list-group-item",
      "d-flex",
      "justify-content-between",
      "align-items-center"
    );
    listItem.innerHTML = `<span>${tool}</span><button class="remove-btn" style="background: none; border: none;"><i class="bi bi-x-circle"></i></button>`;

    var toolExists = Array.from(toolList.children).some(
      (item) => item.textContent.trim() === tool.trim()
    );
    if (!toolExists) {
      toolList.appendChild(listItem);

      listItem
        .querySelector(".remove-btn")
        .addEventListener("click", function () {
          toolList.removeChild(listItem);
        });
    } else {
      alert("¡La herramienta ya está en la lista!");
    }
  }
});
