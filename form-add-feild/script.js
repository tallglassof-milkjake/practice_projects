

var next = 1;
$(".add-more").click(function(e){
    e.preventDefault();
    var addto = "#field";
    var addRemove = "#field";
    next = next + 1;
    var newIn = `<div id="field"><input autocomplete="off" class="input w-50" id="field${next}" name="field${next}" type="text" placeholder="Lawyers Name" data-items="8"/><input autocomplete="off" class="input w-25" id="field2" name="prof1" type="text" placeholder="Lawyers Phone" data-items="8"/><button id="addBtn" class="btn add-more" type="button">+</button></div>`;
    // var newIn = '<input autocomplete="off" class="input form-control" id="field' + next + '" name="field' + next + '" type="text">';
    var newInput = $(newIn);
    var removeBtn = '<button id="remove' + (next - 1) + '" class="btn btn-danger remove-me" >-</button></div>';
    var removeButton = $(removeBtn);
    $(addto).after(newInput);
    $(addRemove).append(removeButton);
    $("#field" + next).attr('data-source',$(addto).attr('data-source'));
    $("#count").val(next);  
    
        $('.remove-me').click(function(e){
            e.preventDefault();
            var fieldNum = this.id.charAt(this.id.length-1);
            var fieldID = "#field" + fieldNum;
            $(this).remove();
            $(fieldID).remove();
        });
});    


// $("#addBtn").click(function(e) {
//     // let removeBtn = '<button id="remove' + (next - 1) + '" class="btn btn-danger remove-me" >-</button></div><div id="field">';
//     e.preventDefault();
//     $("#field").after(`
//         <div id="field">
//             <input autocomplete="off" class="input w-50" id="field1" name="prof1" type="text" placeholder="Lawyers Name" data-items="8"/>
//             <input autocomplete="off" class="input w-25" id="field2" name="prof1" type="text" placeholder="Lawyers Phone" data-items="8"/>
//             <button id="addBtn" class="btn add-more" type="button">+</button>
//         </div>
//     `);
//     console.log(this);
// });


