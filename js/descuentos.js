function calcularPrecioConDescuento(precio, descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
    return precioConDescuento;
}

function onClickButtonPriceDiscount() {

    // const coupons = [
    //     "argen10",
    //     "argen15",
    //     "argen20",
    //     "argen25"
    // ]

    /** 
         Otra posible solución es con switch
         */

    /**
     *   switch(couponValue) {
          case coupons[0]: // "JuanDC_es_Batman"
            descuento = 15;
          break;
          case coupons[1]: // "pero_no_le_digas_a_nadie"
            descuento = 30;
          break;
          case coupons[2]: // "es_un_secreto"
           descuento = 25;
         break;
        }
     */

    /**
     * Esta es una solución con if, sin embargo un alerta no es lo más cómodo para el usuario en el caso de que se ingrese un cupón no válido.
     */

    /** 
    *  if (!coupons.includes(couponValue)) {
        alert("El cupón " + couponValue + " no es válido");
    } else if (couponValue === coupons[0]) {
        descuento = 10;
    } else if (couponValue === coupons[1]) {
        descuento = 15;
    } else if (couponValue === coupons[2]) {
        descuento = 20;
    } else if (couponValue === coupons[3]) {
        descuento = 25;
    }
    ----------------------------------------------------------------------*/

    let descuento;
    const inputPrice = document.getElementById("inputPrice");
    const priceValue = inputPrice.value;
    const inputCoupon = document.getElementById("inputCoupon");
    const couponValue = inputCoupon.value;

    /**
     * Preparo el array para usarlo en una función más inteligente ------------------------>
     */
    const coupons = [
        {
            name: "argen10",
            descuento: 10,
        },
        {
            name: "argen15",
            descuento: 15,
        },
        {
            name: "argen20",
            descuento: 20,
        },
        {
            name: "argen25",
            descuento: 25,
        }
    ]
    const isCouponValueValid = function (coupon) {
        return coupon.name === couponValue;
    };

    const userCoupon = coupons.find(isCouponValueValid);
    

    if (!userCoupon) {
        const resultP = document.getElementById("ResultP");
        resultP.innerText = "El cupón: " + couponValue + " no es válido";
    } else {
        const descuento = userCoupon.descuento;
        const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);

        const resultP = document.getElementById("ResultP");

        resultP.innerText = "El precio con descuento son: $" + precioConDescuento;
    }
}

