import React, { PureComponent } from 'react';
import classnames from 'classnames';
import BScroll from 'better-scroll';
import { ScrollerProps, ScrollerState } from './typing';

const prefixCls = 'k-scroller';

class Scroller extends PureComponent<ScrollerProps, ScrollerState> {
  private static defaultProps = {
    probeType: 1,
    click: true,
    listenScroll: false,
    listenBeforeScroll: false,
    listenScrollEnd: false,
    direction: 'vertical',
    scrollbar: false,
    pullDownRefresh: false,
    pullUpLoad: false,
    startY: 0,
    refreshDelay: 20,
    freeScroll: false,
    mouseWheel: false,
    bounce: true,
    zoom: false,
  };

  private elScroll: HTMLDivElement;

  private scroll: any;

  constructor(props) {
    super(props);
  }

  public componentDidMount() {
    setTimeout(() => {
      this.init();
    }, 50);
  }

  public componentWillUnmount() {
    if (this.scroll) {
      this.scroll.destroy();
      this.scroll = null;
    }
  }

  public render() {
    const { children, className, style, pullDownRefresh } = this.props;
    const classString = classnames(
      {
        [prefixCls]: true,
      },
      className,
    );
    return (
      <div ref={this.handleRef} className={classString} style={style}>
        {children}
      </div>
    );
  }
  private handleRef = (elm: HTMLDivElement) => {
    this.elScroll = elm;
  };

  private init() {
    if (!this.elScroll) {
      return;
    }
    const {
      probeType,
      click,
      freeScroll,
      direction,
      scrollbar,
      pullDownRefresh,
      pullUpLoad,
      startY,
      mouseWheel,
      bounce,
      zoom,
      wheel,
      onInit,
      onBeforeScrollStart,
      onScrollStart,
      onScroll,
      onScrollEnd,
      onPullingDown,
      onPullingUp,
      onTouchEnd,
    } = this.props;

    const options = {
      probeType,
      click,
      scrollY: freeScroll || direction === 'vertical',
      scrollX: freeScroll || direction === 'horizontal',
      scrollbar,
      pullDownRefresh,
      pullUpLoad,
      startY,
      freeScroll,
      mouseWheel,
      bounce,
      zoom,
      wheel,
    };

    this.scroll = new BScroll(this.elScroll, options);

    if (onBeforeScrollStart) {
      this.scroll.on('beforeScrollStart', onBeforeScrollStart);
    }

    if (onScrollStart) {
      this.scroll.on('scrollStart', onScrollStart);
    }

    if (onScroll) {
      this.scroll.on('scroll', onScroll);
    }

    if (onScrollEnd) {
      this.scroll.on('scrollEnd', onScrollEnd);
    }

    if (onPullingDown) {
      this.scroll.on('pullingDown', onPullingDown);
    }

    if (onPullingUp) {
      this.scroll.on('pullingUp', onPullingUp);
    }

    if (onTouchEnd) {
      this.scroll.on('touchEnd', onTouchEnd);
    }

    if (onInit) {
      onInit(this.scroll);
    }
  }
}

export default Scroller;
