import telebot
import urllib
from telebot import types

TOKEN = "1209874254:AAGG1h5P44Z1NkmraSBlaI9WmvvqM5jIJe4"
bot = telebot.TeleBot(TOKEN)

bot_text = """
Приветствуем вас в нашем демо боте!

Мы сможем с высокой точностью определить правонарушение

Для этого вы должны сфотографировать нарушение и отправить нам вместе с вашей текущей геолокацией

Сначала зарегистрируйтесь, отправьте свои контакты
@wesion_bot
"""

def save_image_from_message(message):
    cid = message.chat.id
    image_id = message.photo[len(message.photo)-1].file_id
    bot.send_message(cid, '🔥 Анализирую, ждите... 🔥')
    file_path = bot.get_file(image_id).file_path
    image_url = f"https://api.telegram.org/file/bot{TOKEN}/{file_path}"
    if not os.path.exists("/content/tmp"):
        os.makedirs("/content/tmp")
    image_name = f"{image_id}.jpg"
    urllib.request.urlretrieve(image_url, f"/content/tmp/{image_name}")
    return image_name
  
def cleanup_remove_image(image_name):
    folder = os.listdir("/content/detected_rois/")
    for image in folder:
        if image.endswith(".jpg"):
            os.remove(f"/content/detected_rois/{image}")
    os.remove(f"/content/tmp/{image_name}")

# Telegram bot
@bot.message_handler(commands=['start'])
def send_welcome(message):
  markup = types.ReplyKeyboardMarkup(resize_keyboard=True, one_time_keyboard=True)
  item1 = types.KeyboardButton("Отправить контакт", request_contact=True)
  markup.add(item1)

  bot.send_message(message.chat.id, bot_text, reply_markup=markup)

@bot.message_handler(content_types=['contact'])
def handle_contact(message):
  text = "Получили, теперь отправьте фотографию нарушения"
  bot.send_message(message.chat.id, text)

@bot.message_handler(content_types=['photo'])
def handle(message):
  text = "Далее, отправьте описание к правонарушению (какое нарушение было совершенно)"
  bot.send_message(message.chat.id, text)

@bot.message_handler(content_types=['text'])
def handle_text(message):
  markup = types.ReplyKeyboardMarkup(resize_keyboard=True, one_time_keyboard=True)
  item1 = types.KeyboardButton("Отправить текущую геолокацию", request_location=True)
  markup.add(item1)

  text = "Спасибо, теперь отправьте вашу текущую геолокацию, чтобы выявить местоположение правонарушения"
  bot.send_message(message.chat.id, text, reply_markup=markup)

@bot.message_handler(content_types=['location'])
def handle_location(message):    
  text = """На этом, всё.
Если отправленные вами доказательство будут достаточнми для выявления правонарушения, то вы получите денежное вознаграждение.
Спасибо за сотрудничество."""
  bot.send_message(message.chat.id, text)

if __name__ == "__main__":
    bot.polling()
