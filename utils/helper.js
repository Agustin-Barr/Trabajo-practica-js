export const messagealert = (title ="",Text = "",icon = "warning") => 
    Swal.fire({
        title: title,
        text: text,
        icon: icon
      });