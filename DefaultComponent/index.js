import React, { Component, PropTypes } from 'react';
import styles from './DefaultComponent.css';

class DefaultComponent extends Component {

  /* propTypes - это типизация передаваемых в компонент
   * данных (которые ты вытягиваешь из this.prop). Советую
   * привыкать их описывать сразу, поскольку они очень помогают
   * дебажить код. Типы можно посмотреть тут
   * https://facebook.github.io/react/docs/reusable-components.html
   */
  static propTypes = {
    parentMessage: PropTypes.string
  };

  /* constructor - инициализирующий метод класса. Здесь записывается
   * начальное состояние компонента.
   * super() - обязательная функция в конструкторе. Без нее класс не работает.
   * this.state - само состояние компонента. Должно быть объектом (!).
   */
  constructor() {
    super();
    this.state = {
      welcomeMessage: 'Hello, i\'m a default component. This message is from the component state'
    };
  }

  handleClick() {
    alert('the div has been clicked');
  }

  /* Метод рендеринга компонента. Возвращать должно верстку, которая
   * должна быть обернута в <div> или null, если верстки нет
   */
  render() {
    /* На этой стадии ты вытягиваешь данные из state
     * или из props, проводишь какие-либо вычислительные операции
     * и присвоения. Важно! Этот метод должен вернуть верстку! Или null!
     * Проводи тут только вычислительные операции!
     */
    const { welcomeMessage } = this.state;

    // parentMessage пришел из компонента App. (см файл index.js в корне)
    const { parentMessage } = this.props;

    /* В return нельзя вызывать методы, которые меняют
     * состояние компонента! Только те, которые возвращают
     * верстку. Например, {this.renderMenuList()}
     * иначе ты получишь миллион ошибок в консоль и положишь вкладку
     * браузера.
     */
    return (
      <div>
        {welcomeMessage}
        {/* Вызывать методы изменения состояния можно только так */}
        <div onClick={() => this.handleClick()}>
          {parentMessage}
        </div>
      </div>
    );
  }
}

export default DefaultComponent;
