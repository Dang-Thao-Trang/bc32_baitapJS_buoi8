let arrInput = [];
function clickInput() {
  let userInput = +document.getElementById("userInput").value;
  arrInput.push(userInput);
  console.log(arrInput);
  document.getElementById("int").innerHTML = arrInput;
  return clickInput;
}
//=====================================================
//bài 1: tổng các số dương trong mảng
function bai1() {
  //cách 1
  let sum1 = 0;
  for (let i = 0; i < arrInput.length; i++) {
    if (arrInput[i] >= 0) {
      sum1 += arrInput[i];
    }
  }
  // cách 2
  //   let sum1 = arrInput.reduce((sum1, value) => {
  //     return value > 0 ? sum1 + value : sum1;
  //   }, 0);
  document.getElementById("int1").innerHTML = sum1;
}
//=====================================================

// bài 2: Đếm bao nhiêu số dương trong mảng
function bai2() {
  //   cách 1
  let count2 = 0;
  for (let i = 0; i < arrInput.length; i++) {
    if (arrInput[i] >= 0) {
      count2 += 1;
    } else {
      count2 += 0;
    }
  }
  //   cách 2
  //   let count2 = arrInput.reduce((count2, value) => {
  //     return value >= 0 ? count2 + 1 : count2;
  //   }, 0);
  document.getElementById("int2").innerHTML = count2;
}
//=====================================================

// bài 3 tìm số nhỏ nhất
function bai3() {
  let min3 = arrInput[0];
  for (let i = 1; i < arrInput.length; i++) {
    if (min3 > arrInput[i]) {
      min3 = arrInput[i];
    }
  }
  // cách 2:
  //   let min3 = Math.min(...arrInput);
  // cách 3:
  //   let min3 = arrInput.sort((a, b) => a - b);
  //   document.getElementById("int3").innerHTML = min3[0];
  document.getElementById("int3").innerHTML = min3;
}
//=====================================================

// bài 4 tìm số dương nhỏ nhất
function bai4() {
  let positiveNumber = arrInput.filter((value) => {
    return value > 0;
  }, 0);
  let min4 = positiveNumber[0];
  for (let i = 0; i < positiveNumber.length; i++) {
    if (min4 > positiveNumber[i]) {
      min4 = positiveNumber[i];
    }
  }
  // let min4 = Math.min(...positiveNumber)
  document.getElementById("int4").innerHTML = min4;
  console.log(min4);
}
//=====================================================

//Bài 5: tìm số chẵn cuối cùng trong mảng. Nếu mảng không có giá trị chẵn thì trả về -1.
function bai5() {
  let evenNumber5;
  arrInput.forEach((value, index) => {
    if (value % 2 === 0) {
      evenNumber5 = index;
    }
  });
  if (!evenNumber5) {
    document.getElementById("int5").innerHTML = -1;
  } else {
    document.getElementById("int5").innerHTML = arrInput[evenNumber5];
  }
}

//   let evenNumber5 = [-1];
//   evenNumber5 = arrInput.filter((value) => {
//     return value % 2 === 0;
//   }, 0);
//=====================================================

// Bài 6: đổi chỗ 2 giá trị trong mảng theo vị trí (Cho nhập vào 2 vị trí muốn đổi chỗ giá trị).
function bai6() {
  let index1 = +document.getElementById("index1").value;
  let index2 = +document.getElementById("index2").value;
  // tạo biến tạm change6: gán giá trị thứ 1 cho biến tạm
  let change6 = arrInput[index1];
  // gán giá trị 2 cho giá trị 1
  arrInput[index1] = arrInput[index2];
  // giá trị biến 1 đang được gán cho biến tạm , được gán cho giá trị 2
  arrInput[index2] = change6;
  document.getElementById("int6").innerHTML = arrInput;
}
//=====================================================

// Bài 7: sắp xếp mảng theo thứ tự tăng dần.
function bai7() {
  let sortAZ = arrInput.sort((a, b) => a - b);
  document.getElementById("int7").innerHTML = sortAZ;
  return sortAZ;
}
//=====================================================

//Bài 8: tìm số nguyên tố đầu tiên trong mảng
function checkSNT(number) {
  if (number < 2) {
    return 0;
  }
  for (var j = 2; j <= Math.sqrt(number); j++) {
    if (number % j === 0) {
      return 0;
    }
  }
  return 1;
}

function bai8() {
  for (let i = 0; i < arrInput.length; i++) {
    for (let j = 2; j <= arrInput[i]; j++) {
      if (checkSNT(arrInput[i]) === 1) {
        document.getElementById("int8").innerHTML = arrInput[i];
        return;
      }
    }
  }
  return (document.getElementById("int8").innerHTML = -1);
}
//=====================================================

// Bài 9: nhập thêm 1 mảng số thực, tìm xem trong mảng có bao nhiêu số nguyên?
let addArray = [];
function addNumber9() {
  let num9 = +document.getElementById("num9").value;
  addArray.push(num9);
  document.getElementById("add9").innerHTML = addArray;
  return addNumber9;
}

function bai9() {
  let interger9 = addArray.filter((value) => {
    return Number.isInteger(value) === true;
  }, 0);
  let countInteger9 = 0;
  for (let i = 0; i < interger9.length; i++) {
    countInteger9 = interger9.length;
  }
  document.getElementById("int9").innerHTML = countInteger9;
}
//=====================================================

//Bài 10: so sánh số lượng số dương và số lượng số âm xem số nào nhiều hơn.
function bai10() {
  let positiveNumber10 = 0;
  let negativeNumber10 = 0;
  // đếm slg số dương và slg số âm
  for (let i = 0; i < arrInput.length; i++) {
    if (arrInput[i] >= 0) {
      positiveNumber10 += 1;
    } else if (arrInput[i] < 0) {
      negativeNumber10 += 1;
    }
  }
  // xuất kết quả
  read10 = "";
  if (positiveNumber10 > negativeNumber10) {
    read10 += "số lượng số dương nhiều hơn số lượng số âm";
  } else if (negativeNumber10 > positiveNumber10) {
    read10 += "số lượng số âm nhiều hơn số lượng số dương";
  } else read10 += "số lượng số âm bằng với số lượng số dương";

  document.getElementById("int10").innerHTML = read10;
}
//=====================================================
