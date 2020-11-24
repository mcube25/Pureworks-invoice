
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
   localStorage.setItem("shippingdate", shippingdate);
   localStorage.setItem("itemcode", itemcode)
   localStorage.setItem("invoiceno", invoiceno);
   localStorage.setItem("description", description);
   localStorage.setItem("unitprice", unitprice);
   localStorage.getItem("quantity", quantity);
   localStorage.getItem("discount", discount);
   localStorage.getItem("amount", amount);
     window.location="certificate.html";

  }
  var rdate = localStorage.getItem("duedate");
  var sdate = localStorage.getItem("shippingdate");
  var itemz = localStorage.getItem("itemcode")
  var invno = localStorage.getItem("invoiceno");
  var desc = localStorage.getItem("description");
  var unitp = localStorage.getItem("unitprice");
  var quan = localStorage.getItem("quantity");
  var disco = localStorage.getItem("discount");
  var amt = localStorage.getItem("amount");

    console.log("zfzfggcvhbjnkmllkjhgfdxfcvgbhnjmklghf");
    console.log(rname);
    document.getElementById('due').innerHTML = rdate;
    document.getElementById('shipping').innerHTML = sdate;
    document.getElementById('ite').innerHTML = itemz;
    document.getElementById('inv').innerHTML = invno;
    document.getElementById('des').innerHTML = desc;
    document.getElementById('uni').innerHTML = unitp;
    document.getElementById('qua').innerHTML = quan;
    document.getElementById('dis').innerHTML = disco;
    document.getElementById('amo').innerHTML = amt;

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
