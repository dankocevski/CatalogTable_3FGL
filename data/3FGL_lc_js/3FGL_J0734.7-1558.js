Time = [54712, 54742, 54772, 54801, 54831, 54861, 54891, 54920, 54950,       54980, 55009, 55039, 55069, 55099, 55128, 55158, 55188, 55218,       55247, 55277, 55307, 55336, 55366, 55396, 55426, 55455, 55485,       55515, 55545, 55574, 55604, 55634, 55663, 55693, 55723, 55753,       55782, 55812, 55842, 55872, 55901, 55931, 55961, 55990, 56020,       56050, 56080, 56109]
FluxHistory = [ 5.39348316,  8.67448521,  4.62032032,  8.1944418 ,  7.18774891,        5.76831865,  7.45501995,  4.82020283,  5.47975063,  6.73515415,        6.28496742,  5.45095253,  7.29345322,  7.16094446,  6.35995913,        7.08609009,  7.47898245,  6.72859669,  7.76691866,  6.27024698,        6.65740824,  6.04657221,  5.60257864,  4.06034184,  7.0434618 ,        4.18229008,  5.92128706,  8.17160892,  5.9830513 ,  8.50207901,        6.27331495,  6.72241497,  4.25211668,  6.04298067,  3.31254339,        3.51786399,  7.48090076,  8.83177185,  6.04681015,  7.00772047,        6.09393501,  3.57544088,  4.4259038 ,  4.81644106,  4.03848553,        6.42232704,  6.14249468,  9.14007187]
FluxHistoryError = [[  3.78056622,   7.13753033],       [  7.01367712,  10.4433136 ],       [  3.11496925,   6.26128101],       [  6.65602636,   9.85517311],       [  5.57553673,   8.9105835 ],       [  4.34336567,   7.32344866],       [  5.83017063,   9.17897034],       [  3.21298218,   6.61339092],       [  4.01196575,   7.072258  ],       [  5.06458759,   8.539711  ],       [  4.82880878,   7.84265232],       [  3.94606423,   7.10800934],       [  5.55691385,   9.1376133 ],       [  5.4506402 ,   8.99559212],       [  4.40920639,   8.51609612],       [  5.50133085,   8.78456688],       [  5.39654636,   9.80391979],       [  5.09444237,   8.4942503 ],       [  5.83415794,   9.84391499],       [  4.69908524,   7.98667336],       [  4.99935818,   8.42222023],       [  4.27386093,   7.98171091],       [  4.1807003 ,   7.14202166],       [  2.26302958,   6.19684982],       [  5.50210524,   8.70596123],       [  2.62079954,   5.93098497],       [  4.27152634,   7.72724199],       [  6.39171219,  10.04564857],       [  4.05315495,   8.10203457],       [  6.8794117 ,  10.23477364],       [  4.46642733,   8.25818539],       [  5.10543919,   8.45412827],       [  2.65892196,   6.03769016],       [  4.37143469,   7.87870026],       [  1.82976782,   4.98714256],       [  1.78217947,   5.46500349],       [  5.92469025,   9.15009117],       [  6.63322496,  11.19984436],       [  4.58585119,   7.61838675],       [  5.22823715,   8.93696213],       [  4.55515766,   7.79463291],       [  2.16222072,   5.14421225],       [  2.82308888,   6.26886892],       [  3.40267944,   6.36553955],       [  2.30039287,   6.00085354],       [  4.91742611,   8.05983353],       [  4.27345562,   8.17220879],       [  7.25121737,  11.20545578]], dtype=float32
Energy = [173, 547, 1732, 5477, 31622]
Spectrum = [[  1.73000000e+02,   3.87620392e+02],       [  5.47000000e+02,   1.83843109e+02],       [  1.73200000e+03,   4.57131500e+01],       [  5.47700000e+03,   6.39440060e+00],       [  3.16220000e+04,   2.14571625e-01]]
SpectrumError = [[  1.73000000e+02,   3.30945221e+02,   4.45251495e+02],       [  5.47000000e+02,   1.72466751e+02,   1.95219467e+02],       [  1.73200000e+03,   4.27448502e+01,   4.86814499e+01],       [  5.47700000e+03,   5.54755402e+00,   7.31241894e+00],       [  3.16220000e+04,   9.24971998e-02,   4.02604878e-01]]

// Time units in Modified Julian Date (MJD)
// FluxHistory units in 1e-8 x photons/cm/s
// FluxHistoryError units in 1e-8 x photons/cm/s. FluxHistoryError represents [ydatum + error, ydatum - error]
// Energy in units of MeV
// Spectrum in units of 1e-10 x photons/cm/s. Spectrum represents [energy, ydatum]
// SpectrumError in units of 1e-10 x photons/cm/s. SpectrumErrorError represents [energy, ydatum + error, ydatum - error]