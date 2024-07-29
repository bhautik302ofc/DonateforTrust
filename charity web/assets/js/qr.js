<script id="rendered-js"></script>
    const name = "JKGroup";
    const upi = "9586319762@okbizaxis";
    const amt = document.getElementById('amts').value;
    var url = "upi://pay?pa=" + upi + "&pn=" + name + "&am=" + amt + "&tn=&cu=INR";
    let qrCode = null;
    function inputChnage(event) {
      event.preventDefault();
      const name = "JKGroup";
      const upi = "9586319762@okbizaxis";
      const amt = document.getElementById('amts').value;
      url = "upi://pay?pa=" + upi + "&pn=" + name + "&am=" + amt + "&tn=&cu=INR";
      generateQRCode()
      console.log('amts' + rs)
    }
    function generateQRCode() {
      var text = url; // Trim whitespace
      var bgColor = document.getElementById('bg-color-input').value;
      var fgColor = document.getElementById('fg-color-input').value;
      var errorCorrectionLevel = document.getElementById('error-correction-input').value;
      var margin = parseInt(document.getElementById('margin-input').value);
      var resolution = parseInt(document.getElementById('resolution-input').value);
      var qrStyle = document.getElementById('qr-style-input').value;

      var qrCodeDiv = document.getElementById('qrcode');

      if (text) {
        // Clear previous QR code if exists
        qrCodeDiv.innerHTML = "";

        // Create QR code
        qrCode = new QRCodeStyling({
          width: resolution,
          height: resolution,
          data: text,
          margin: margin,
          qrOptions: {
            errorCorrectionLevel: errorCorrectionLevel
          },

          dotsOptions: {
            type: qrStyle, // square, rounded, dots, etc.
            color: fgColor
          },

          backgroundOptions: {
            color: bgColor
          }
        });



        qrCode.append(qrCodeDiv);
      } else {
        // Display instruction text
        qrCodeDiv.innerHTML = '<p style="text-align: center; margin: 20px; color: #252432;font-weight:bold;">Please enter text or URL aboveto generate QR code.</p><a href="#" style="display:none;">JK Group</a>';
        qrCode = null; // Reset qrCode object
      }
    }

    // Initialize QR code generation on input change
    // ['input', 'change'].forEach(event => {
    //   document.getElementById('amts').addEventListener(event, generateQRCode);
    //   document.getElementById('bg-color-input').addEventListener(event, generateQRCode);
    //   document.getElementById('fg-color-input').addEventListener(event, generateQRCode);
    //   document.getElementById('error-correction-input').addEventListener(event, generateQRCode);
    //   document.getElementById('margin-input').addEventListener(event, generateQRCode);
    //   document.getElementById('resolution-input').addEventListener(event, generateQRCode);
    //   document.getElementById('qr-style-input').addEventListener(event, generateQRCode);
    // });

    document.getElementById('download-btn').addEventListener('click', function () {
      var format = document.getElementById('format-input').value;
      if (qrCode) {
        qrCode.download({ name: 'qrcode', extension: format });
      } else {
        alert('Please generate a QR code first by entering text or a URL.');
      }
    });

    // Generate an initial instruction text
    // generateQRCode();
    //# sourceURL=pen.js
  