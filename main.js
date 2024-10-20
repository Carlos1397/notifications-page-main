document.addEventListener('DOMContentLoaded', () => {
    const markAllButton = document.querySelector('#mark-all');
    markAllButton.addEventListener('click', handleMarkAllClick);

    //   evento de click a cada post
    const posts = document.querySelectorAll('.post');
    posts.forEach(post => {
        post.addEventListener('click', handlePostClick);
    });
});

const handleMarkAllClick = () => {
    const unreadElements = document.querySelectorAll('.status.not-read');
    if (unreadElements.length > 0) {
        unreadElements.forEach(element => {
            element.classList.remove('not-read');
        });
        updateNotificationCount();
        console.log(`Se han marcado como leídos ${unreadElements.length} notificaciones.`);
    } else {
        console.log('No hay notificaciones sin leer.');
    }
};

const handlePostClick = (event) => {
    const statusElement = event.currentTarget.querySelector('.status.not-read');
    if (statusElement) {
        statusElement.classList.remove('not-read');
        updateNotificationCount();
        console.log('Notificación marcada como leída desde el post.');
    }
};

const updateNotificationCount = () => {
    const notificationCountElement = document.querySelector('#notification-count');
    const unreadCount = document.querySelectorAll('.status.not-read').length;
    notificationCountElement.textContent = unreadCount;
};
