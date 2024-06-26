const zod = require('zod');

function validateUserDetails(pp){
    const schema = zod.object({
        email: zod.string().email(),
        password: zod.string().min(10),
        name: zod.string().toUpperCase()
    });

    const result = schema.safeParse(pp);
    console.log(result);
}

validateUserDetails({
    email: 'shuvam@menubar.in',
    password: 'Shuvam1234',
    name: 'shuvam mandal'
})