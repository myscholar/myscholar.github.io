/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
$(function(){
    
    $("#lirmcscholList").click(function(e){
        $('#fmrmcscholar2').attr('action', '/jsp/scholarListing.jsp');
        $('#fmrmcscholar2').submit();
    });  
    
    $('#idLoginTab').click(function() {
            $('#loginSection').show();
    });
    
    $('#loginRadisAppCancel').click(function() {
            $('#loginSection').hide();
    });
    
    $('#idLogOutTab').click(function() {
        $('#loginMainForm').attr('action', '/rmcscholar/logout.do');
        $('#loginMainForm').submit(); 
    });
    
    $('#loginRadisApp').click(function() {
        var errorNo = eval($('#errorNo').val());
        var bypassChecking = 'true';

        if ($('#usernameID').val() === "") {
            bypassChecking = 'false';
        }

        if ($('#passwordID').val() === "") {
            bypassChecking = 'false';
        }
        
        if (bypassChecking === 'true') {
            $('#errormessage').hide();
            $('#errormsg').hide();
            $('#loginMainForm').attr('action', '/rmcscholar/authentication.do');
            $('#loginMainForm').submit(); 
        } else {
            $('#errormessage').fadeIn(2000).fadeOut(400).fadeIn(2000).fadeOut(400);
            $('#username').val('');
            $('#password').val('');
            
        }
    });
    
    var t4 = $('#searchingResearchGrantTable').DataTable({
        "paging": true,
        "lengthChange": false,
        "searching": false,
        "ordering": true,
        "info": false,
        "autoWidth": false
    });

    t4.on('order.dt search.dt', function () {
        t4.column(0).nodes().each(function (cell, i) {
            cell.innerHTML = i + 1;
        });
    }).draw();
    
});