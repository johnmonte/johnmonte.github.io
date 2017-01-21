new WOW().init();

$('#type').typeIt({
     //strings: 'John Monte is a self-taught designer with over a decade of experience, solving problems through collaboration and good design.',
     speed: 75,
     autoStart: false
})
.tiType('John Monte is a stunning')
.tiPause(500)
.tiDelete(7)
.tiPause(500)
.tiType('elf-taught designer ')
.tiPause(250)
.tiType('with over ten years')
.tiPause(500)
.tiDelete(9)
.tiPause(500)
.tiType('a decade of experience, ')
.tiPause(250)
.tiType('solving problems through collaboration ')
.tiPause(250)
.tiType('and good design.');