import { Directive, ElementRef, OnInit, Renderer } from 'angular2/core';

@Directive({
    selector: '[myHighlight]',
    inputs: ['highlightColor:myHighlight'],
    host: {
        '(mouseenter)': 'onMouseEnter()',
        '(mouseleave)': 'onMouseLeave()'
    }
})

// export class HighlightDirective implements OnInit {
export class HighlightDirective {
    private _defaultColor: string = 'green';
    highlightColor: string;

    constructor(private _elRef: ElementRef, private _renderer: Renderer) {
        console.log(this._elRef.nativeElement);
    }

    // ngOnInit():any {
    //     // this._elRef.nativeElement.style.backgroundColor = this._defaultColor;
    //     this._renderer.setElementStyle(this._elRef, 'background-color', this.highlightColor || this._defaultColor);
    // }

    onMouseEnter() {
        this.highlight(this.highlightColor || this._defaultColor);
    }

    onMouseLeave() {
        this.highlight(null);
    }

    private highlight(color: string) {
        this._renderer.setElementStyle(this._elRef.nativeElement, 'background-color', color);
    }
}