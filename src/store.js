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
    fitness: [
        {
            icon: 'fa-link-slash',
            title: 'Strength & Conditioning',
            paragraf: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quos harum officiis, deserunt voluptatibus necessitatibus quia.'
        },
        {
            icon: 'fa-bicycle',
            title: 'Fitness & Cardio',
            paragraf: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quos harum officiis, deserunt voluptatibus necessitatibus quia.'
        },
        {
            icon: 'fa-cloud',
            title: 'Flexibility & Rest',
            paragraf: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quos harum officiis, deserunt voluptatibus necessitatibus quia.'
        },
        {
            icon: 'fa-heart-pulse',
            title: 'Health & Diet',
            paragraf: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quos harum officiis, deserunt voluptatibus necessitatibus quia.'
        },
    ],
    people: [
        {
            photo: '',
            text: '"The trainers at Avaga Gym have helped me reach my fitness goals beyond anything I could of hoped for. I love it"',
            name: 'Tara Smith'
        },
        {
            photo: '',
            text: 'The atmosphere at AvadaGym is amazing, the people are even better. All in all, it is a great place to work out.',
            name: 'Simon Chel'
        },
        {
            photo: '',
            text: 'The facilities at Avada Gym stood outvto me the most. They are well maintained and have high quality equipment.',
            name: 'Jen Wirth'
        },
        {
            photo: '',
            text: 'No bad things to say about Avada Gym, they are top notch at evry corner and truly take care of their customers.',
            name: 'Jeff Glum'
        },
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
