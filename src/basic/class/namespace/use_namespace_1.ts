import * as first from './first_namespace';
import * as second from './second_namespace';

let nsc_1 = new first.FirstNameSpace.NameSpaceClass(12);
nsc_1.ya();

// let nsc_2 = new FirstNameSpace.NotExported();

let nsc_2 = new second.SecondNameSpace.NameSpaceClass(12);
nsc_2.ya();