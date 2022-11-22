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
            photo: 'review_1-compressor',
            text: '"The trainers at Avaga Gym have helped me reach my fitness goals beyond anything I could of hoped for. I love it"',
            name: 'Tara Smith'
        },
        {
            photo: 'review_3-compressor-2',
            text: 'The atmosphere at AvadaGym is amazing, the people are even better. All in all, it is a great place to work out.',
            name: 'Simon Chel'
        },
        {
            photo: 'review_2-compressor',
            text: 'The facilities at Avada Gym stood outvto me the most. They are well maintained and have high quality equipment.',
            name: 'Jen Wirth'
        },
        {
            photo: 'review_4-compressor-2',
            text: 'No bad things to say about Avada Gym, they are top notch at evry corner and truly take care of their customers.',
            name: 'Jeff Glum'
        },
    ],
    photoPerformance: [
        {
            image: 'home-image1'
        },
        {
            image: 'home-image2'
        },
        {
            image: 'home-image3'
        },
        {
            image: 'home-image4'
        },
        {
            image: 'home-image54'
        },
        {
            image: 'home-image6'
        },
    ],
    trainers: [
        {
            photo: 'trainer1',
            name: 'Ann Baker',
            job: 'Personal Trainer',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam praesentium quae expedita dolorem.'
        },
        {
            photo: 'trainer3',
            name: 'Anne Warren',
            job: 'Personal Trainer',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam praesentium quae expedita dolorem.'
        },
        {
            photo: 'trainer4',
            name: 'Peter Rice',
            job: 'Personal Trainer',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam praesentium quae expedita dolorem.'
        }
    ],
    performanceNews: [
        {
            photo: 'blog1',
            title: 'Train with free weigths of your body weight?',
            paragraf: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium, tortor vitae porttitor suscipit, sapien purus aliquet risus, eu finibus arcu ante nec risus. [...]'
        },
        {
            photo: 'blog6',
            title: 'Nutritional advice that will keep you training',
            paragraf: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium, tortor vitae porttitor suscipit, sapien purus aliquet risus, eu finibus arcu ante nec risus. [...]'
        },
        {
            photo: 'trainer4',
            title: 'Simple principles for your next workout',
            paragraf: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium, tortor vitae porttitor suscipit, sapien purus aliquet risus, eu finibus arcu ante nec risus. [...]'
        },
        {
            photo: 'blog4',
            title: 'To be number one, train like you’re number two',
            paragraf: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium, tortor vitae porttitor suscipit, sapien purus aliquet risus, eu finibus arcu ante nec risus. [...]'
        },
        {
            photo: 'trainer3',
            title: 'Top 5 mistakes every gym member makes',
            paragraf: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium, tortor vitae porttitor suscipit, sapien purus aliquet risus, eu finibus arcu ante nec risus. [...]'
        },
        {
            photo: 'trainer1',
            title: 'The myths of shedding body fat explored',
            paragraf: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium, tortor vitae porttitor suscipit, sapien purus aliquet risus, eu finibus arcu ante nec risus. [...]'
        },
    ],
    linksNavBottom: [
        {
            title: 'come find us',
            street: '12345 North main Street',
            city: 'New York, NY 555555',
            phone: '1.800.555.6789',
            email: 'info@your-domain.com'
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
