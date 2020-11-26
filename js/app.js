
  function submit(){
   console.log("in");
   var duedate = document.getElementById('duedate').value;
   var shippingdate = document.getElementById('shippingdate').value;
   var itemcode = document.getElementById('itemcode').value
   var invoiceno = document.getElementById('invoiceno').value;
   var description = document.getElementById('description').value;
   var unitprice = document.getElementById('unitprice').value;
   var quantity = document.getElementById('quantity').value;
   var discount = document.getElementById('discount').value;
   var amount = document.getElementById('amount').value;
   localStorage.setItem("duedate", duedate);
   console.log('duedate');
   localStorage.setItem("shippingdate", shippingdate);
   localStorage.setItem("itemcode", itemcode);
   console.log('itemcode');
   localStorage.setItem("invoiceno", invoiceno);
   localStorage.setItem("description", description);
   localStorage.setItem("unitprice", unitprice);
   localStorage.setItem("quantity", quantity);
   localStorage.setItem("discount", discount);
   localStorage.setItem("amount", amount);
     window.location="certificate.html";

  }


    console.log("zfzfggcvhbjnkmllkjhgfdxfcvgbhnjmklghf");
    document.getElementById('due').innerHTML = localStorage.getItem("duedate");
    document.getElementById('shipping').innerHTML = localStorage.getItem("shippingdate");
    document.getElementById('ite').innerHTML = localStorage.getItem("itemcode");
    document.getElementById('inv').innerHTML =  localStorage.getItem("invoiceno");
    document.getElementById('des').innerHTML = localStorage.getItem("description");
    document.getElementById('uni').innerHTML = localStorage.getItem("unitprice");
    document.getElementById('qua').innerHTML = localStorage.getItem("quantity");
    document.getElementById('dis').innerHTML = localStorage.getItem("discount");
    document.getElementById('amo').innerHTML = localStorage.getItem("amount");

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
