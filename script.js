// Theme toggle functionality
const themeToggle = document.getElementById('theme-toggle');
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

// Check for saved theme preference or default to user's system preference
const currentTheme = localStorage.getItem('theme') || 
    (prefersDarkScheme.matches ? 'dark' : 'light');

// Set initial theme
if (currentTheme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
}

// Theme toggle handler
themeToggle.addEventListener('click', () => {
    let theme = 'light';
    
    if (!document.documentElement.hasAttribute('data-theme')) {
        document.documentElement.setAttribute('data-theme', 'dark');
        theme = 'dark';
    } else {
        document.documentElement.removeAttribute('data-theme');
    }
    
    localStorage.setItem('theme', theme);
}); 

        document.getElementById('get-in-touch').addEventListener('click', function(event) {
            event.preventDefault();
            const icons = document.getElementById('icons');
            if (icons.style.display === 'none' || icons.style.display === '') {
                icons.style.display = 'flex';
            } else {
                icons.style.display = 'none';
            }
        });
        //The date logic goes here
        var date=new Date(2020,6,1)
        var today=new Date()
        var difference=(today-date)/(1000*60*60*24*365) // 1000 is ms
        var experience=difference.toFixed(1)
        console.log(experience)
        var newkey=`${experience}+ years of experience`
        document.getElementById('date').innerHTML=newkey
