import { reactive } from "vue";

export const store = reactive({
    linksNavTop: [
        {
            text: 'home',
            active: true
        },
        {
            text: 'about us',
            active: false
        },
        {
            text: 'facilities',
            active: false
        },
        {
            text: 'membership',
            active: false
        },
        {
            text: 'testimonials',
            active: false
        },
        {
            text: 'blog',
            active: false
        }
    ],
    linksNavBottom: [
        {
            title: 'come find us',
            street: '12345 North main Street',
            city: 'New York, NY 555555',
            phone: 'Phone',
            email: 'Email'
        },
        {
            title: 'recent posts',
            text_one: 'Train with free weights or your body weight?',
            text_two: 'Nutritional advice that will keep you training',
        },
        {
            title: 'opening times',
            row_one: 'Weekdays Monday - Friday',
            row_one_b: '09:00 - 19:00',
            row_two: 'Weekdays Saturday - Sunday',
            row_two_b: '09:00 - 21:00',
        }
    ]
})
