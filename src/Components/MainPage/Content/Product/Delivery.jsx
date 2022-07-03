import React from "react";
import style from "./Delivery.module.css";
import {
  GrDeliver,
  BiCreditCard,
  GiWaxSeal,
  RiExchangeFundsFill,
} from "react-icons/all";

export default function Delivery() {
  return (
    <div className={style.container}>
      <h2>Доставка,Оплата,Возврат</h2>

      <div className={style.delivery}>
        <span>
          <GrDeliver />
        </span>
        <div className={style.deliveryText}>
          <h3>Доставка</h3>
          <p>
            Всеми возможными сервисами доставки, любую точку страны 1-3 дня.
          </p>
        </div>
      </div>

      <div className={style.delivery}>
        <span>
          <BiCreditCard />
        </span>
        <div className={style.deliveryText}>
          <h3>Оплата</h3>
          <p>
            Банковской картой VISA или Master Card на нашем сайте или при
            получении заказа наличными.
          </p>
        </div>
      </div>

      <div className={style.delivery}>
        <span>
          <GiWaxSeal />
        </span>
        <div className={style.deliveryText}>
          <h3>Проверка качества</h3>
          <p>
            Получая товар на почте, вы имеете право прежде чем оплачивать заказ,
            примерять, посмотреть и оценить, насколько качество заказанной
            продукции устраивает вас. Подходит ли вам размер и фасон.
            Соответствует ли вашему ожиданию.
          </p>
        </div>
      </div>

      <div className={style.delivery}>
        <span>
          <RiExchangeFundsFill />
        </span>
        <div className={style.deliveryText}>
          <h3>Возврат/Обмен товара</h3>
          <p>
            Если вам не подошёл размер, цвет или же вы обнаружили другие
            проблемы в течении 14 дней после покупки, вы можете вернуть нам
            товар или обменять на другой.
          </p>
          <p>
            Нужно позвонить нашим менеджерам по любому из этих номеров: 098
            161-36-32, 050 362-04-05 и в телефонном режиме вам оформят обмен или
            возврат товара.
          </p>
          <p>
            Доставка оплачивается покупателем, в случае возврата или обмена
            товара. Возврат средств происходит в течении 1-3 рабочих дней после
            получения возвращаемого товара нами на почте. В случае обнаружения
            брака производства, доставку оплачиваем мы.
          </p>
        </div>
      </div>

      <div className={style.delivery}>
        <div className={style.deliveryReturn}>
          <h4>Условия возврата / обмена:</h4>
          <ul>
            <li>отсутствие признаков использования товара;</li>
            <li>наличие бирок;</li>
            <li>товар должен иметь товарный вид.</li>
          </ul>
          <p>
            В случае выявления признаков использования товара, мы оставляем за
            собой право отказать в возврате.
          </p>
        </div>
      </div>
    </div>
  );
}
