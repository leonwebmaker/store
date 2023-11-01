var selectedRow = null

function onFormSubmit()
{
    var formData = readFormData();
    if(selectedRow == null)
    {
        insertNewRecord(formData);
    }
    else
    {
        updateRecord(formData);
    }
    resetForm();
}
function readFormData()
{
    var formData = {};
    formData['productName'] = document.getElementById('productName').value;
    formData['quantity'] = document.getElementById('quantity').value;
    formData['id'] = document.getElementById('id').value;
    return formData;
}
function insertNewRecord(data)
{
    var table = document.getElementById('product-list').getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.productName;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.quantity;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.id;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = `<a onClick="onEdit(this)" class="btn btn-success btn-sm edit"><i class="far fa-edit" style="pointer-events: none;"></i></a>`;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = `<a onClick="onDelete(this)" class="btn btn-danger btn-sm delete"><i class="far fa-trash-alt" style="pointer-events: none;"></i></a>`;
    cell6 = newRow.insertCell(5);
    cell6.innerHTML = `<a onClick="onView(this)" class="btn btn-danger btn-sm view"><i class="fa fa-eye" style="pointer-events: none;"></i></a>`;
    
    
}
function resetForm()
{
    document.getElementById('productName').value = '';
    document.getElementById('quantity').value = '';
    document.getElementById('id').value = '';
    selectedRow = null;
}
function onEdit(td)
{
    selectedRow = td.parentElement.parentElement;
    document.getElementById('productName').value = selectedRow.cells[0].innerHTML;
    document.getElementById('quantity').value = selectedRow.cells[1].innerHTML;
    document.getElementById('id').value = selectedRow.cells[2].innerHTML;
}
function updateRecord(formData)
{
    selectedRow.cells[0].innerHTML = formData.productName;
    selectedRow.cells[1].innerHTML = formData.quantity;
    selectedRow.cells[2].innerHTML = formData.id;
}
function onDelete(td)
{
    row = td.parentElement.parentElement;
    document.getElementById('product-list').deleteRow(row.rowIndex);
    resetForm();
}
function onView(td)
{
    selectedRow = td.parentElement.parentElement;
    document.getElementById('productName').value = selectedRow.cells[0].innerHTML;
    document.getElementById('quantity').value = selectedRow.cells[1].innerHTML;
}