Time = [54712, 54742, 54772, 54801, 54831, 54861, 54891, 54920, 54950,       54980, 55009, 55039, 55069, 55099, 55128, 55158, 55188, 55218,       55247, 55277, 55307, 55336, 55366, 55396, 55426, 55455, 55485,       55515, 55545, 55574, 55604, 55634, 55663, 55693, 55723, 55753,       55782, 55812, 55842, 55872, 55901, 55931, 55961, 55990, 56020,       56050, 56080, 56109]
FluxHistory = [ 0.33686727,  1.07987881,  0.        ,  0.18557455,  0.34065077,        0.        ,  0.48196039,  0.44697583,  0.32507771,  1.60229111,        0.        ,  0.        ,  0.14553912,  0.        ,  0.        ,        1.17286503,  0.27031052,  0.        ,  1.23962152,  0.24751765,        0.69836193,  0.14430898,  0.        ,  0.        ,  0.94732678,        0.31599265,  1.6596179 ,  0.65914637,  0.67674118,  0.5966841 ,        1.46750093,  1.17461228,  0.72050536,  0.38449261,  0.25182945,        0.78683764,  0.70821822,  0.        ,  0.        ,  0.52925646,        0.        ,  0.51645255,  0.5676043 ,  0.36374676,  0.        ,        0.        ,  0.        ,  0.        ]
FluxHistoryError = [[ 0.        ,  1.48924094],       [ 0.53154469,  1.76850128],       [ 0.        ,  0.6320914 ],       [ 0.        ,  1.41812231],       [ 0.05859777,  0.78456092],       [ 0.        ,  0.67861122],       [ 0.01583263,  1.10938752],       [ 0.        ,  1.79627931],       [ 0.10450979,  0.69293022],       [ 1.07156634,  2.18752432],       [ 0.        ,  0.63326299],       [ 0.        ,  0.83948731],       [ 0.        ,  1.16712447],       [ 0.        ,  1.15388954],       [ 0.        ,  0.57039034],       [ 0.54065591,  1.97542739],       [ 0.07982996,  0.62499189],       [ 0.        ,  1.16534173],       [ 0.43201959,  2.22422743],       [ 0.        ,  1.27188605],       [ 0.16255665,  1.42234707],       [ 0.        ,  1.06074446],       [ 0.        ,  1.11892641],       [ 0.        ,  0.80351895],       [ 0.44216418,  1.64992976],       [ 0.        ,  1.90304297],       [ 1.03210235,  2.42716551],       [ 0.24859357,  1.28967083],       [ 0.31953624,  1.15512776],       [ 0.17996043,  1.27477765],       [ 0.86809468,  2.21560884],       [ 0.56233031,  1.99044228],       [ 0.16673177,  1.45380449],       [ 0.13392526,  0.77956927],       [ 0.        ,  1.58853906],       [ 0.26739985,  1.45658112],       [ 0.21718642,  1.44961762],       [ 0.        ,  0.99603659],       [ 0.        ,  0.86231238],       [ 0.04384187,  1.20767593],       [ 0.        ,  1.03347397],       [ 0.12616444,  1.11661649],       [ 0.16365632,  1.14012551],       [ 0.04344976,  0.92594898],       [ 0.        ,  0.84117389],       [ 0.        ,  1.28349483],       [ 0.        ,  1.08679152],       [ 0.        ,  1.07594705]]
Energy = [173, 547, 1732, 5477, 31622]
Spectrum = [[  1.73000000e+02,   4.14746666e+01],       [  5.47000000e+02,   1.02193422e+01],       [  1.73200000e+03,   2.66589284e+00],       [  5.47700000e+03,   1.69903588e+00],       [  3.16220000e+04,   4.52291429e-01]]
SpectrumError = [[  1.73000000e+02,   6.12744904e+00,   7.75044403e+01],       [  5.47000000e+02,   5.43880749e+00,   1.51080542e+01],       [  1.73200000e+03,   1.79747522e+00,   3.64916611e+00],       [  5.47700000e+03,   1.28490341e+00,   2.17429113e+00],       [  3.16220000e+04,   2.81248897e-01,   6.77691817e-01]]

// Time units in Modified Julian Date (MJD)
// FluxHistory units in 1e-8 x photons/cm/s
// FluxHistoryError units in 1e-8 x photons/cm/s. FluxHistoryError represents [ydatum + error, ydatum - error]
// Energy in units of MeV
// Spectrum in units of 1e-10 x photons/cm/s. Spectrum represents [energy, ydatum]
// SpectrumError in units of 1e-10 x photons/cm/s. SpectrumErrorError represents [energy, ydatum + error, ydatum - error]