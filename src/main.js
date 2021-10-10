function main(){
    // data 
    let data = []
    let student1 = {
        fullName: 'Brendan Mc Dermott',
        pic: 'images/student1.PNG',
        desc:'I started ara in 2020 and so far i am getting really tired of IS classes. i came here to learn programming not change management.',
        allMyProjects: []
    }

    let student2 = {
        fullName: 'April McMahon',
        pic: 'images/student2.PNG',
        desc:'I just accidentally enrolled in IT. to be honest it was a good idea because IT is really simple. you barely need to try.',
        allMyProjects: []
    }

    let student3 = {
        fullName: 'Benjamin Fischer',
        pic: 'images/student1.PNG',
        desc:'I am german and that means that i cannot have fun with IT. I must be serious all the time.',
        allMyProjects: []
    }

    let tc = {
        projectName: 'RFID Reader',
        allMyParticipants: [student1, student2, student3],
        projectSummary: '2021 the students of tech colab were tasked with creating software for both mobile and desktop to facilitate the recording and considation of data that would be gathered about runners in a race.',
        allMyParagraphs: [
            ['This paragraph is a paragraph to talk about a specific part of the project. each paragraph should include a photo to acompany it but if it does not that should not mess stuff up. all this data has been loaded by javascript and is using static data defined early on in the process. once hooked up to a backend more functionality will be available.', 'images/aboutPlaceholder3.jpg'],
            ['this is a secondary paragraph. the more paragraphs that are add will be treated as an odd or even basis, each paragraph has a picture slot.', 'images/aboutPlaceholder1.jpg'],
            ['this is just a paragraph to show what happens when an image is not supplied -- Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', '']
        ],
        projectImgName: 'tcPlaceholder.jpg'
    }
    let cp = {
        projectName: 'Ai Barista',
        allMyParticipants: [student1, student2, student3],
        projectDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        projectImgName: 'cpPlaceholder.jpg'
    }
    let about = {
        section1: ['About Ara and Tech Colab','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id cursus metus aliquam eleifend mi in nulla posuere sollicitudin. Ut sem viverra aliquet eget sit amet. Eleifend quam adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus. Maecenas ultricies mi eget mauris. Porttitor lacus luctus accumsan tortor posuere ac ut consequat. In arcu cursus euismod quis viverra nibh cras pulvinar. Turpis massa tincidunt dui ut. Pellentesque adipiscing commodo elit at imperdiet. Egestas diam in arcu cursus euismod quis.', 'images/aboutPlaceholder3.jpg'],
        section2:['Bibendum enim facilisis gravida neque convallis a. Ut venenatis tellus in metus vulputate eu scelerisque felis imperdiet. Pulvinar mattis nunc sed blandit libero volutpat sed. Donec adipiscing tristique risus nec feugiat in fermentum. Amet purus gravida quis blandit turpis cursus in. Urna nunc id cursus metus aliquam. mauris nunc congue nisi. Purus in mollis nunc sed. Posuere sollicitudin aliquam ultrices sagittis orci a scelerisque. Ultrices dui sapien eget mi proin sed libero enim sed. Donec adipiscing tristique risus nec feugiat in fermentum posuere urna. Gravida in fermentum et sollicitudin ac orci phasellus egestas tellus.'],
        section3:['images/aboutPlaceholder1.jpg','images/aboutPlaceholder2.jpg','images/aboutPlaceholder3.jpg']
    }

    data.push(tc)
    data.push(cp)
    data.push(about)
    controller = new Controller(data)
    return controller    
}



function getResult(){
    console.log("get result ran")
}


