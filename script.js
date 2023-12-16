document.addEventListener('DOMContentLoaded', function () {
  const barsContainer = document.querySelector('.bars-container');
  const randomizeButton = document.getElementById('randomize');
  const bubbleSortButton = document.getElementById('bubble-sort');
  const insertionSortButton = document.getElementById('insertion-sort');
  const selectionSortButton = document.getElementById('selection-sort');
  const mergeSortButton = document.getElementById('merge-sort');
  const quickSortButton = document.getElementById('quick-sort');
  const shellSortButton = document.getElementById('shell-sort');

  let bars = [];

  function createAndDisplayBars(container) {
    bars = [];
    container.innerHTML = '';

    for (let i = 0; i < 100; i++) {
      const bar = document.createElement('div');
      bar.classList.add('bar');
      bar.style.height = `${Math.floor(Math.random() * 500)}px`;
      bars.push(bar);
      container.appendChild(bar);
    }
  }

  randomizeButton.addEventListener('click', () => {
    createAndDisplayBars(barsContainer);
  });

  function updateBarsDisplay(bars) {
    barsContainer.innerHTML = '';
    bars.forEach(bar => barsContainer.appendChild(bar));
  }

  function applySort(sortFunction) {
    const sortedBars = sortFunction([...bars]); 
    updateBarsDisplay(sortedBars);
  }

  bubbleSortButton.addEventListener('click', () => {
    applySort(bubbleSort);
  });

  insertionSortButton.addEventListener('click', () => {
    applySort(insertionSort);
  });

  selectionSortButton.addEventListener('click', () => {
    applySort(selectionSort);
  });

  mergeSortButton.addEventListener('click', () => {
    applySort(mergeSort);
  });

  quickSortButton.addEventListener('click', () => {
    applySort(quickSort);
  });

  shellSortButton.addEventListener('click', () => {
    applySort(shellSort);
  });


  // Bubble Sort Algorithms


  function bubbleSort(array) {
    const n = array.length;
    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        if (parseInt(array[j].style.height) > parseInt(array[j + 1].style.height)) {
          const temp = array[j].style.height;
          array[j].style.height = array[j + 1].style.height;
          array[j + 1].style.height = temp;
        }
      }
    }
    return array;
  }


  // Insertion Sort Algorithms


  
  function insertionSort(array) {
    for (let i = 1; i < array.length; i++) {
      const currentElement = array[i];
      let j = i - 1;
      let temp = currentElement;
      while (j >= 0 && array[j].offsetHeight > temp.offsetHeight) {
        array[j + 1] = array[j];
        j--;
      }
      array[j + 1] = temp;
      for (let k = j + 1; k < i + 1; k++) {
        array[k].style.height = array[k].offsetHeight + "px";
      }
    }
    return array;
  }
  


  // Selection Sort Algorithms


  function selectionSort(array) {
    for (let i = 0; i < array.length; i++) {
      let minIndex = i;
      for (let j = i + 1; j < array.length; j++) {
        if (parseInt(array[j].style.height) < parseInt(array[minIndex].style.height)) {
          minIndex = j;
        }
      }
      const temp = array[i].style.height;
      array[i].style.height = array[minIndex].style.height;
      array[minIndex].style.height = temp;
    }
    return array;
  }


  // Merge Sort Algorithms


  function mergeSort(array) {
    if (array.length < 2) {
      return array;
    }

    const mid = Math.floor(array.length / 2);
    const left = array.slice(0, mid);
    const right = array.slice(mid);

    return merge(mergeSort(left), mergeSort(right));
  }

  function merge(left, right) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
      if (parseInt(left[leftIndex].style.height) < parseInt(right[rightIndex].style.height)) {
        result.push(left[leftIndex]);
        leftIndex++;
      } else {
        result.push(right[rightIndex]);
        rightIndex++;
      }
    }

    while (leftIndex < left.length) {
      result.push(left[leftIndex]);
      leftIndex++;
    }

    while (rightIndex < right.length) {
      result.push(right[rightIndex]);
      rightIndex++;
    }

    return result;
  }


  // Quick Sort Algorithms


  function quickSort(array, start = 0, end = array.length - 1) {
    if (start < end) {
      const pivotIndex = partition(array, start, end);
      quickSort(array, start, pivotIndex - 1);
      quickSort(array, pivotIndex + 1, end);
    }
    return array;
  }

  function partition(array, start, end) {
    const pivot = array[end];
    let pivotIndex = start;

    for (let i = start; i < end; i++) {
      if (parseInt(array[i].style.height) < parseInt(pivot.style.height)) {
        const temp = array[i].style.height;
        array[i].style.height = array[pivotIndex].style.height;
        array[pivotIndex].style.height = temp;
        pivotIndex++;
      }
    }

    const temp = array[pivotIndex].style.height;
    array[pivotIndex].style.height = array[end].style.height;
    array[end].style.height = temp;

    return pivotIndex;
  }


  // Shell Sort Algorithms


  function shellSort(array) {
    const n = array.length;
    let gap = Math.floor(n / 2);

    while (gap > 0) {
      for (let i = gap; i < n; i++) {
        const temp = array[i].style.height;
        let j = i;

        while (j >= gap && parseInt(array[j - gap].style.height) > parseInt(temp)) {
          array[j].style.height = array[j - gap].style.height;
          j -= gap;
        }

        array[j].style.height = temp;
      }

      gap = Math.floor(gap / 2);
    }
    return array;
  }
});