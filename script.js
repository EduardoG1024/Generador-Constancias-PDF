const hornet = document.querySelector('.contenedor-hornet');
        const hornetimg = document.querySelector('.hornet-aviso');
        setTimeout(() => {
            hornet.style.display = 'flex';
            setTimeout(() => {
                hornet.remove();
            }, 10000);
        }, 5000);

        function GenerarPDF(e) {
            e.preventDefault();
            alert('Revisa si tus datos son los correctos');
            const NombreAlumno = document.getElementById('NombreAlumno').value.trim();
            const MatriculaAlumno = document.getElementById('MatriculaAlumno').value.trim();
            const CURPAlumno = document.getElementById('CURPAlumno').value.trim();
            const CarreraAlumno = document.getElementById('CarreraAlumno').value;
            const CuatrimestreAlumno = document.getElementById('Cuatrimestres').value;
            const ContainerPDF = document.querySelector('.containerPDF');

            //MAYUSCULAS para los datos
            const NOMBREALUMNO = NombreAlumno.toUpperCase();
            const CURPALUMNO = CURPAlumno.toUpperCase();

            ContainerPDF.innerHTML = "";

            //CREAR ENCABEZADO DEL PDF
            const FirstElement = document.createElement('div');
            FirstElement.className = "ContainerHeader";
            const imgTop = document.createElement('img');
            imgTop.src = "img/UTC.png";
            imgTop.className = "ImgTop";
            const SideImg = document.createElement('img');
            SideImg.src = "img/UTCBAN.png";
            SideImg.className = "ImgBan";
            FirstElement.appendChild(imgTop);
            FirstElement.appendChild(SideImg);
            ContainerPDF.appendChild(FirstElement);
            
            // VARIABLES DE TEXTO EN EL PDF
            // DateOficeDue
            // TextCorrespondencia
            // TextPDF

            //FECHA - OFICIO - ASUNTO del PDF
            const SecondElement = document.createElement('div');
            SecondElement.className = "ContainerDateOficeDue";
            const DateOficeDue = document.createElement('p');
            DateOficeDue.className = "DateOficeDue";
            DateOficeDue.innerHTML= 
            `Culiacán de Rosales, Sinaloa, 10 de Septiembre de 2025
            <br>
            Oficio No. SE/2025/3/E075
            <br>
            Asunto: Constancia de Estudio`;
            SecondElement.appendChild(DateOficeDue);
            ContainerPDF.appendChild(SecondElement);

            //A QUIEN CORRESPONDA
            const Correspondencia = document.createElement('div')
            Correspondencia.className = "Correspondencia";
            const TextCorrespondencia = document.createElement('p');
            TextCorrespondencia.className = "TextCorrespondencia";
            TextCorrespondencia.textContent = "A quien corresponda:";
            Correspondencia.appendChild(TextCorrespondencia);
            ContainerPDF.appendChild(Correspondencia);

            //PRIMER PARRAFO DEL PDF
            const ThirdElement = document.createElement('p');
            ThirdElement.className = "TextPDF";
            ThirdElement.innerHTML = 
            `Por este conducto hago constatar que <strong>${NOMBREALUMNO}</strong> con numero de 
            matricula <strong>${MatriculaAlumno}</strong> y CURP <strong>${CURPALUMNO}</strong>, esta inscrito en el 
            ciclo escolar 2024-2025 y cursa el ${CuatrimestreAlumno} cuatrimestre, que inicio 
            el 01 de Septiembre de 2025 y termina el 19 de Diciembre del año 2025, en la 
            carrera de <strong>${CarreraAlumno}</strong>, en la Universidad Tecnológica de Culiacán, 
            turno matutino, con horario de 7:00 a 14:00 horas, con el modelo de 
            clases presenciales.`;

            //SEGUNDO PARRAFO DEL PDF
            const FourthElement = document.createElement('p');
            FourthElement.className = "TextPDF";
            FourthElement.textContent = 
            `Se extiende la presente, para lo fines legales que al interesado 
            convengan, en la ciudad de Culiacán de Rosales, Sinaloa a diez 
            días del mes de Septiembre del año dos mil veinticinco.`;

            const ContainerTextMiddle = document.createElement('div');
            ContainerTextMiddle.className = "ContainerTextMiddle";
            ContainerTextMiddle.appendChild(ThirdElement);
            ContainerTextMiddle.appendChild(FourthElement);
            ContainerPDF.appendChild(ContainerTextMiddle);

            //CREAR FIRMA DEL PDF
            const FifthElement = document.createElement('div');
            FifthElement.className = "ContainerFirma";
            const ImgMid = document.createElement('img');
            ImgMid.src = "img/FIRMA.png";
            ImgMid.className = "ImgMid";
            FifthElement.appendChild(ImgMid);
            ContainerPDF.appendChild(FifthElement);

            //CREAR EL PIE DE PAGINA DEL PDF
            const SixthElement = document.createElement('div');
            SixthElement.className = "FooterPDF";
            const ImgBot1 = document.createElement('img');
            ImgBot1.src = "img/SEP.png";
            ImgBot1.className = "ImgBot1";
            const ImgBot2 = document.createElement('img');
            ImgBot2.src = "img/SINALOA.png";
            ImgBot2.className = "ImgBot2";
            const ImgBot3 = document.createElement('img');
            ImgBot3.src = "img/UTyP.png";
            ImgBot3.className = "ImgBot3";
            const ImgBot4 = document.createElement('img');
            ImgBot4.src = "img/BOTTOMINFO.png";
            ImgBot4.className = "ImgBot4";
            SixthElement.appendChild(ImgBot1);
            SixthElement.appendChild(ImgBot2);
            SixthElement.appendChild(ImgBot3);
            SixthElement.appendChild(ImgBot4);
            ContainerPDF.appendChild(SixthElement);

            //CREAR BARRA INFERIOR DECORATIVA
            const BarraDecorativa = document.createElement('div');
            BarraDecorativa.className = "BarraDecorativa";
            ContainerPDF.appendChild(BarraDecorativa);

            //
            document.getElementById("downloadBtn").addEventListener("click", () => {
            const element = document.querySelector(".containerPDF");

            html2canvas(element).then(canvas => {
                const imgData = canvas.toDataURL("image/png");
                const { jsPDF } = window.jspdf;
                const pdf = new jsPDF("p", "mm", "a4");

                // Calculamos el tamaño proporcional al A4
                const imgWidth = 210; // ancho A4 en mm
                const pageHeight = 297; 
                const imgHeight = canvas.height * imgWidth / canvas.width;

                pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
                pdf.save("ConstanciaEscolar.pdf");
            });
        });
        }
