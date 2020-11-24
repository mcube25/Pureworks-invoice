
  function submit(){
   console.log("in");
   var duedate = document.getElementById('duedate').value;
   var shippingdate = document.getElementById('shippingdate').value;
   var invoiceno = document.getElementById('invoiceno').value;
   var description = document.getElementById('description').value;
   var unitprice = document.getElementById('unitprice').value;
   var quantity = document.getElementById('quantity')
   localStorage.setItem("duedate", duedate);
   localStorage.setItem("shippingdate", shippingdate);
   localStorage.setItem("invoiceno", invoiceno);
   localStorage.setItem("description", description);
   localStorage.setItem("unitprice", unitprice);
   localStorage.getItem("quantity", quantity);
    window.location="certificate.html";

  }
  var rdate = localStorage.getItem("duedate");
  var sdate = localStorage.getItem("shippingdate");
  var invno = localStorage.getItem("invoiceno");
  var desc = localStorage.getItem("description");
  var unitp = localStorage.getItem("unitprice");

    console.log("zfzfggcvhbjnkmllkjhgfdxfcvgbhnjmklghf");
    console.log(rname);
    document.getElementById('dname').innerHTML = rdate;
    document.getElementById('dage').innerHTML = rage;
    document.getElementById('dura').innerHTML = dur;
    document.getElementById('sign').innerHTML = sig;

    (function () {
        var
         form = $('.container'),
         cache_width = 980, //form.width(),
         a4 = [595.28, 841.89]; // for a4 size paper width and height

        $('#create_pdf').on('click', function () {
            $('body').scrollTop(0);
            createPDF();
        });
        //create pdf  s
        function createPDF() {
            getCanvas().then(function (canvas) {
                var
                 img = canvas.toDataURL("image/png"),
                 doc = new jsPDF({
                     unit: 'px',
                     format: 'a4'
                 });
                doc.addImage(img, 'JPEG', 1.2, 1);
                doc.save('certificate-creation.pdf');
                form.width(cache_width);
            });
        }

        // create canvas object
        function getCanvas() {
            form.width((a4[0] * 1.33333) - 80).css('max-width', 'none');
            return html2canvas(form, {
                imageTimeout: 2000,
                removeContainer: true
            });
        }

    }());
