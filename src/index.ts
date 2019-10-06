import { User } from './User';
import { Company } from './Company';
import { CustomMap } from './CustomMap';

const mapDiv = document.getElementById('map');
const map = new CustomMap(mapDiv);

const user = new User();
const company = new Company();

map.addMarker(user);
map.addMarker(company);
