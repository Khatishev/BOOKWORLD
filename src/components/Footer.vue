<template>
    <footer class="footer">
        <div class="footer-content-section">
            <div class="left-content-block">
                <span>Торговый Дом</span>
                <br />
                <span>"BOOKWORLD"</span>
                <div class="footer-box-button">
                    <span>Мы в соцсетях:</span>
                    <br />
                    <button class="btn-footer">
                        <img class="icon-btn-footer" src="/src/assets/icon-gmail.png" alt="gmail" />
                    </button>
                    <button class="btn-footer">
                        <img class="icon-btn-footer" src="/src/assets/icon-instagram.png" alt="instagram" />
                    </button>
                    <button class="btn-footer">
                        <img class="icon-btn-footer" src="/src/assets/icon-vk.png" alt="vk" />
                    </button>
                    <button class="btn-footer">
                        <img class="icon-btn-footer" src="/src/assets/icon-whatsapp.png" alt="whatsapp" />
                    </button>
                </div>
                <span>
                    Наш Адрес:<br />г. Москва, ул. Большая Полянка, 61, стр. 1<br />Наш
                    номер телефона:<br />+7 (928) 555-55-55
                </span>
            </div>
            <div class="right-content-block">
                <span>
                    Значимые в истории люди о книгах:<br />
                    Уильям Шекспир: "Книги — это безмолвные учителя, которые всегда
                    готовы помочь."<br />Альберт Эйнштейн: "Книги — это ключи к
                    знаниям, которые открывают двери в мир."<br />Роберт Сапольски:
                    "Чтение — это возможность учиться у лучших умов всех времен."<br />Бенджамин
                    Франклин: "Чтение — это основа всего обучения."<br />Николай
                    Васильевич Гоголь: "Книги — это свет в конце туннеля, который
                    ведет к знаниям."
                </span>
            </div>
        </div>
    </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'Footer',
});
</script>