$('button').on('click', () => {
    const value = $("input[type='radio']:checked").val()
    console.log(value)
})